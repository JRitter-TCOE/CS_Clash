export class ATB {
    constructor(unit) {
        this.unit = unit;
        this.width = 128;
        this.max = 100;
        this.current = 0;
        this.html = $('<div class="ATB"></div>');
        this.innerBar = $('<div class="ATBinner"></div>');
        this.html.html(this.innerBar);
        this.innerBar.css({'width': `${this.current/this.max*this.width}px`});

        this.tick();
    }

    tick() {
        if (this.isDead()) {
            return;
        }

        this.increaseATB();
        this.triggerAttack();
        this.update();

        setTimeout(() => this.tick(), 50);
    }

    isDead() {
        return this.unit.HPB.current <= 0;
    }

    increaseATB() {
        this.current += this.unit.character.getEffectiveStats().spd;
    }

    triggerAttack() {
        if (this.current >= this.max) {
            this.unit.character.abilities.Basic(this.unit.character, this.unit.battlefield[this.unit.targets][0]);
            this.current = 0;   
        }
    }

    update() {
        this.innerBar.css({'width': `${this.current/this.max*this.width}px`});
    }
}