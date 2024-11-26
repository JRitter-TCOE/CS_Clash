import { BattleEnemyField } from "./BattleEnemyField.js";
import { BattlePlayerField } from "./BattlePlayerField.js";
import { BattleUnit } from "./BattleUnit.js";

export class BattleField {
    constructor(students, enemies) {
        this.playerUnits = students.map((value) => new BattleUnit(this, value));
        this.enemyUnits = enemies.map((value) => new BattleUnit(this, value));
        this.playerField = new BattlePlayerField(this.playerUnits);
        this.enemyField = new BattleEnemyField(this.enemyUnits);
        this.html = $('<div id="battlefield"></div>');
        this.html.append(this.playerField.html, this.enemyField.html);

        this.displayBattlefield();
    }

    displayBattlefield() {
        $('#gamespace').append(this.html);
    }
}