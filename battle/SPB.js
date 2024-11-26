export class SPB {
    constructor(unit) {
        this.unit = unit;
        this.width = 128;
        this.max = 100;
        this.current = 50;
        this.html = $('<div class="SPB"></div>');
        this.innerBar = $('<div class="SPBinner"></div>');
        this.html.html(this.innerBar);
        this.innerBar.css({'width': `${this.current/this.max*this.width}px`});
    }
}