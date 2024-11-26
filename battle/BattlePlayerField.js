import { BattleRow } from "./BattleRow.js";

export class BattlePlayerField {
    constructor(units) {
        this.units = units;
        this.rows = [];
        this.html = $('<div class="playerField"></div>');

        this.divideUnits();
        
    };

    divideUnits() {
        if (this.units.length > 1) {

            const upperRow = [];
            const lowerRow = [];
            
            for (let i=0; i<this.units.length; i++) {
                if (i%2) {
                lowerRow.push(this.units[i]);
            }
            else {
                upperRow.push(this.units[i]);
            }
        }
        
        this.rows.push(new BattleRow(upperRow));
        this.rows.push(new BattleRow(lowerRow));
        
        this.html.append(this.rows[0].html);
        this.html.append(this.rows[1].html);
        }
        else {
            this.rows.push(new BattleRow(this.units));
            this.html.append(this.rows[0].html);
        }
    }
}