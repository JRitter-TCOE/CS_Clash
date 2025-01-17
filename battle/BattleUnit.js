import { DmgCounter } from "../hud/DmgCounter";
import { ATB } from "./ATB";
import { HPB } from "./HPB";
import { SPB } from "./SPB";

export class BattleUnit {
    constructor(battlefield, character) {
        this.battlefield = battlefield;
        this.character = character;
        this.HPB = new HPB(this);
        this.ATB = new ATB(this);
        this.SPB = new SPB(this);
        this.image = this.character.sprite;
        this.html = $(`<img class="battleUnit" src=${this.image}></img>`);

        this.unitType = this.character.constructor.name === 'StudentCharacter' ? "player" : "enemy";
        this.targets = this.unitType === "player" ? 'enemyUnits' : 'playerUnits';
    }

    getAttribute(type) {
        return this[type].get();
    }

    setAttribute(type, value) {
        this[type].set(value);
    }

    changeAttribute(type, value) {
        this[type].change(value);
    }

    getStat(type) {
        return this.character.getEffectiveStats()[type];
    }
}