import { Bug } from "../enemyCharacters/Bug.js";
import { StudentCharacter } from "../StudentCharacter.js";
import { BattleEnemyField } from "./BattleEnemyField.js";
import { BattlePlayerField } from "./BattlePlayerField.js";
import { BattleUnit } from "./BattleUnit.js";

export class BattleField {
    constructor() {
        this.playerUnits = [
            new BattleUnit(this, new StudentCharacter('student', './gifs/Character_Standing.gif')), 
            new BattleUnit(this, new StudentCharacter('student', './gifs/Character_Standing_2.gif')), 
            
        ];
        this.enemyUnits = [
            new BattleUnit(this, new Bug()), 
            new BattleUnit(this, new Bug()), 
            new BattleUnit(this, new Bug())
        ];
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