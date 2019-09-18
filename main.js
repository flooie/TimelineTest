
$.getJSON("flp.json", function( data ) {
    console.log(data)
    
    google.charts.load('current', {'packages': ['timeline']});
    google.charts.setOnLoadCallback(drawChart);
    
      function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Term' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ '1', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ '2', 'John Adams',        new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ '3', 'Thomas Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

    var options = {
      timeline: { showRowLabels: false }
    };

    chart.draw(dataTable, options);
  }


})

