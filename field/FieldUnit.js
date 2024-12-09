export class FieldUnit {
    constructor(fieldGrid, row, col, team) {
        this.fieldGrid = fieldGrid;
        this.row = row;
        this.col = col;
        this.team = team;
        this.image = './gifs/Character_Standing.gif';
        this.html = $(`<img class="fieldUnit" src=${this.image}></img>`);
        this.fieldGrid.rows[this.row].cells[this.col].unit = this;
        this.fieldGrid.rows[this.row].cells[this.col].html.html(this.html);
    }
}
