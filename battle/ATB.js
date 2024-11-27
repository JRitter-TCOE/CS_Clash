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

    update() {
        this.innerBar.css({'width': `${this.current/this.max*this.width}px`});
    }


    get() {
        return this.current;
    }
    
    set(value) {
        this.current = value;
        this.update();
    }

    change(value) {
        this.current = this.current + value > this.max ? this.max : this.current + value;
        this.update();
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
        this.change(this.unit.getStat('spd'));
    }

    triggerAttack() {
        if (this.current >= this.max) {
            if (this.unit.SPB.current < this.unit.SPB.max) {
                this.basicAttack();
            }
            else {
                this.specialAttack();
            }
        }
    }

    basicAttack() {
        this.unit.character.abilities.Basic(this.unit, this.unit.battlefield[this.unit.targets]);
        this.set(0);  
        this.unit.changeAttribute('SPB', 20);
    }

    specialAttack() {
        this.unit.character.abilities.Special(this.unit, this.unit.battlefield[this.unit.targets]);
        this.set(0);
        this.unit.setAttribute('SPB', 0);
    }

    
}