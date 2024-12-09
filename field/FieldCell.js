import { Encounter } from "../encounters/Encounter";

export class FieldCell {
    constructor(fieldGrid, row, col) {
        this.fieldGrid = fieldGrid;
        this.cellId = {row, col};
        this.width = 64;
        this.height = 64;
        this.html = $('<div class="fieldCell"></div>');
        this.html.click(() => this.click());
        this.unit = null;
    }

    click() {
        this.moveUnit();
    }

    moveUnit() {
        if (!this.fieldGrid.selectedCell) {
            this.selectCell();
        }
        else if (!this.unit) {
            this.updateSelf();
            this.updateUnit();
            this.updateSelectedCell();
            new Encounter('battle', this.unit);
        }
    }

    selectCell() {
        if(this.unit) {
            this.html.toggleClass('selected');
            this.fieldGrid.selectedCell = this;
            $('#info').text(`Row: ${this.cellId.row}, Col: ${this.cellId.col}`);
        }
    }

    updateUnit() {
        this.unit.row = this.cellId.row;
        this.unit.col = this.cellId.col;
    }
    
    updateSelectedCell() {
        this.fieldGrid.selectedCell.html.removeClass('selected');
        this.fieldGrid.selectedCell.unit = null;
        this.fieldGrid.selectedCell = null;
    }

    updateSelf() {
        this.unit = this.fieldGrid.selectedCell.unit;
        this.html.html(this.unit.html);
    }


}