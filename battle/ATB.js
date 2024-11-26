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
        if (this.unit.HPB.current <= 0) {
            return;
        }

        this.current += this.unit.character.getEffectiveStats().spd;

        if (this.current >= this.max) {
            this.unit.character.abilities.Basic(this.unit.character, this.unit.battlefield[this.unit.targets][0]);
            this.current = 0;   
        }

        this.innerBar.css({'width': `${this.current/this.max*this.width}px`});
        setTimeout(() => this.tick(), 50);
    }
}