import { FieldCell } from "./FieldCell.js";

export class FieldRow {
    constructor(fieldGrid, row, colCount) {
        this.fieldGrid = fieldGrid;
        this.colCount = colCount;
        this.rowId = row;
        this.html = $('<div class="fieldRow"></div>');
        this.cells = [];

        this.assembleRows();
    }

    assembleRows() {
        for (let c=0; c<this.colCount; c++) {
            let cell = new FieldCell(this.fieldGrid, this.rowId, c);
            this.cells.push(cell);
            this.html.append(cell.html);
        }
    }
}