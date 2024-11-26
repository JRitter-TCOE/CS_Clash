import { BattleCell } from "./BattleCell.js";

export class BattleRow {
    constructor(units) {
        this.units = units;
        this.cells = [];
        this.html = $('<div class="battleRow"></div>');

        this.setUnits();
    }

    setUnits() {
        for (let unit of this.units) {
            let cell = new BattleCell(unit);
            this.cells.push(cell);
            this.html.append(cell.html);
        }
    }
}