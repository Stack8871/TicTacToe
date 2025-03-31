let fields = [
    null,
    'circle', 
    'circle', 
    null,
    'cross', 
    'cross', 
    null,
    null,
    null,
  ];

 function init (){
    render();
 }
 
 
 
  function render() {
    const contentDiv = document.getElementById("content");
    let tableHTML = "<table>";
    
    // 3 Zeilen
    for (let i = 0; i < 3; i++) {
      tableHTML += "<tr>";
      
      // 3 Spalten pro Zeile
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        let cellContent = "";
        if (fields[index] === 'circle') {
          cellContent = "o";
        } else if (fields[index] === 'cross') {
          cellContent = "x";
        }
        tableHTML += "<td>" + cellContent + "</td>";
      }
      tableHTML += "</tr>";
    }
    
    tableHTML += "</table>";
    contentDiv.innerHTML = tableHTML;
  }


