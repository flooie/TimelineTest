
$.getJSON("flp.json", function( data ) {

    google.charts.load('current', {'packages': ['timeline']});
    google.charts.setOnLoadCallback(drawChart);
    
      function drawChart() {

            var container = document.getElementById('timeline');
            var chart = new google.visualization.Timeline(container);
            var dataTable = new google.visualization.DataTable();

            var arr = []
            var dx = []
              for (var i in data) {
                  for (var key in data[i]) {
                    for (var j in data[i][key]['jurisdictions']) {
                        var x = {}
                        if ((data[i][key]['jurisdictions'][j].indexOf("Harvard")) == -1) {
                            x['jurisdiction'] = data[i][key]['jurisdictions'][j] + ":" + " FLP"
                            }
                        else {
                            x['jurisdiction'] = data[i][key]['jurisdictions'][j]
                        }

                        x['title'] = data[i][key]['title']
                        x['end'] = data[i][key]['end']
                        x['start'] = data[i][key]['start']
                        x['key'] = data[i][key]['key']

                        arr.push(x)

                    }
                }
              }

                for (var i in arr) {
                    var row = arr[i]

                    dx.push(
                            [
                            row['jurisdiction'],
                            row["key"] + " : " + row['title'],
                            new Date(row['start']),
                            new Date(row['end']),
                            ]
                    )
                }

            dataTable.addColumn({type: 'string', id: 'President'});
            dataTable.addColumn({type: 'string', id: 'Name' })
            dataTable.addColumn({type: 'date', id: 'Start'});
            dataTable.addColumn({type: 'date', id: 'End'});

            dataTable.addRows(dx);
            dataTable.sort({column: 0, desc: false});

            var options = {
                      timeline: { colorByRowLabel: true,
                                    groupByRowLabel: true
                                },
                                backgroundColor: '#ebf6f9',
                                colors: ['#003b71', '#ffd100', 'green', 'orange', 'purple', 'blue'],
                            };

            chart.draw(dataTable, options);
    }
})

