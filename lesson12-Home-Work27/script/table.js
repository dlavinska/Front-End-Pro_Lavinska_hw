let min = 0;

function drawTable() {
            
    const divTable = document.getElementById("div-table");
    
    const tbl = document.createElement("table");
    tbl.style.border = "1px solid black";

    for (let i = 0; i < 10; i++) {
        let row = document.createElement("tr");
        row.style.border = "1px solid black";
	    
        for (let j = 0; j < 10; j++) {
            let col = document.createElement("td");
            col.style.border = "1px solid black";
            const cellText = document.createTextNode(min++ + 1);

            col.append(cellText);
            row.append(col);
        }           
            
	    tbl.append(row);

    }
    
    divTable.append(tbl); 
}

window.onload=drawTable;