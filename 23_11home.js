function createTable(n, m) {
    const table = document.createElement('table');
  
    for (let i = 0; i < n; i++) {
        const row = document.createElement('tr');
  
        for (let j = 0; j < m; j++) {
            const cell = document.createElement('td');
            const cellText = document.createTextNode(`Row ${i + 1}, Cell ${j + 1}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
  
        table.appendChild(row);
    }
  
    document.body.appendChild(table);
  }
  