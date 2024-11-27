import { randomRange } from "../tools";

export class DmgCounter {
    constructor(dmg, unit) {
        this.html = $(`<p class="dmgCounter">${dmg}</p>`);
        unit.html.parent().append(this.html);
        
        this.setMovement();
        this.destroySelf();
        
    }

    setMovement() {
        setTimeout(() => this.html.css({top: '-64px', left: `${randomRange(40, 60)}%`}), 50);
    }

    destroySelf() {
        setTimeout(() => this.html.remove(), 1000);
    }
}