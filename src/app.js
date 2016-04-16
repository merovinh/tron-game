function createGridNode(rows, cols) {
  let gridContainer = document.createElement('div');
  gridContainer.className = "gridPlace";
  var grid = document.createElement('div');
  grid.className = "grid"; 
  for(var i = rows; i > 0; i--){ 
    var row = document.createElement("div"); 
    row.className = "row"; 
    for(var x = cols; x > 0; x--){ 
        var cell = document.createElement("div"); 
        cell.className = "col"; 
        row.appendChild(cell); 
    } 
    grid.appendChild(row); 
  }
  gridContainer.appendChild(grid); 
  return gridContainer;
}


var container = document.getElementById('gridContainer');
container.appendChild( createGridNode(40,21) );