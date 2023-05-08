const multiTable = [];
const rows = 9;
const column = 9;
let cells = 0;
// create 9 rows/column and last number in the cell is 81.
for(let x = 0; x <=9; x++) {
    let tempTable = [];
    for(let y = 0; y<=9;y++) {
        cells = x*y;
        tempTable.push(cells);
    }
    multiTable.push(tempTable);
}
console.table(multiTable);

