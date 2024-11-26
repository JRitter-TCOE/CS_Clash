export class HPB {
    constructor(unit) {
        this.unit = unit;
        this.width = 128;
        this.max = this.unit.character.getEffectiveStats().def * 5;
        this.current = this.max;
        this.html = $('<div class="HPB"></div>');
        this.innerBar = $('<div class="HPBinner"></div>');
        this.html.html(this.innerBar);
        this.innerBar.css({'width': `${this.current/this.max*this.width}px`});
    }

    update() {
        this.innerBar.css({'width': `${this.current/this.max*this.width}px`});
        if (this.current <= 0) {
            if (this.unit.unitType === 'player') {
                this.unit.battlefield.playerUnits.splice(0, 1);
            }
            else {
                this.unit.battlefield.enemyUnits.splice(0, 1);
            }
        }
    }
}