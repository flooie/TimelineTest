
$.getJSON("flp.json", function( data ) {
    console.log(data)
    
    google.charts.load('current', {'packages': ['timeline']});
    google.charts.setOnLoadCallback(drawChart);
    
      function drawChart() {

            var container = document.getElementById('timeline');
            var chart = new google.visualization.Timeline(container);
            var dataTable = new google.visualization.DataTable();

              for (var i in data) {
                console.log(data[i])
              }
          
          
          var options = {
      timeline: { showRowLabels: false }
    };

    chart.draw(dataTable, options);
  }


})

