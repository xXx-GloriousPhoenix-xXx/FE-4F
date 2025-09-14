const table = document.getElementById('my-table');
const colorPicker = document.getElementById('color-picker');
const columnColorPicker = document.getElementById('column-color-picker');
const rowsQuantity = 6;
const colsQuantity = 6;
const cellNumber = 2;
let isColorColumnSet = true;
let targetCell = null;
const targetColomnCells = [];

let clickTimer = null;
let clickCount = 0;

for (let i = 0; i < rowsQuantity; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < colsQuantity; j++) {
        const cell = document.createElement('td');
        const number = i * colsQuantity + j + 1;
        cell.textContent = number

        if (j == 1) {
            targetColomnCells.push(cell);
        }
        if (number == cellNumber) {
            targetCell = cell;
            cell.addEventListener('mouseover', () => {
                colorRandomly(cell);
            });
            cell.addEventListener('mouseout', () => {
                cell.style.backgroundColor = '#FFFFFF';
            });

            cell.addEventListener('click', (event) => {
                clickCount++;
                
                if (clickCount === 1) {
                    clickTimer = setTimeout(() => {
                        colorPicker.click();
                        clickCount = 0;
                    }, 300);
                } else if (clickCount === 2) {
                    clearTimeout(clickTimer);
                    columnColorPicker.click();
                    clickCount = 0;
                }
            });
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
}
const colorRandomly = (cell) => {
    const randomColor = () => Math.floor(Math.random() * 256);
    const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    cell.style.backgroundColor = color;
}
colorPicker.addEventListener('change', e => targetCell.style.backgroundColor = e.target.value);
columnColorPicker.addEventListener('change', e => {
    targetColomnCells.forEach(cell => {
        cell.style.backgroundColor = e.target.value;
    });
});