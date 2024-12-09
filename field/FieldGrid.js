import { FieldRow } from "./FieldRow.js";

export class FieldGrid {
    constructor(rowCount, colCount) {
        this.rowCount = rowCount;
        this.colCount = colCount;
        this.html = $('<div id="fieldGrid"></div>');
        this.rows = [];
        this.selectedCell = null;
        
        this.assembleGrid();
        this.displayGrid();
    }

    assembleGrid() {
        for (let r=0; r<this.rowCount; r++) {
            let row = new FieldRow(this, r, this.colCount);
            this.rows.push(row);
            this.html.append(row.html);
        }
    }

    displayGrid() {
        $('#gamespace').append(this.html);
    }

}