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
        this.removeUnitIfDead();
    }

    removeUnitIfDead() {
        if (this.current <= 0) {
            if (this.unit.unitType === 'player') {
                this.removePlayer();
            }
            else {
                this.removeEnemy();
            }
        }
    }

    removePlayer() {
        this.unit.battlefield.playerUnits.splice(0, 1);
        this.unit.html.css({'display': 'none'});
        this.unit.HPB.html.css({'display': 'none'});
        this.unit.SPB.html.css({'display': 'none'});
        this.unit.ATB.html.css({'display': 'none'});
    }

    removeEnemy() {
        this.unit.battlefield.enemyUnits.splice(0, 1);
        this.unit.html.css({'display': 'none'});
        this.unit.HPB.html.css({'display': 'none'});
        this.unit.SPB.html.css({'display': 'none'});
        this.unit.ATB.html.css({'display': 'none'});
    }
}