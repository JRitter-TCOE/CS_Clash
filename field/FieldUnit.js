export class FieldUnit {
    constructor(fieldGrid, row, col) {
        this.fieldGrid = fieldGrid;
        this.row = row;
        this.col = col;
        this.image = './gifs/Crypto_Coin.gif';
        this.html = $(`<img class="fieldUnit" src=${this.image}></img>`);
        this.fieldGrid.rows[this.row].cells[this.col].unit = this;
        this.fieldGrid.rows[this.row].cells[this.col].html.html(this.html);
    }
}
