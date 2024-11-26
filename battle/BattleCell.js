
export class BattleCell {
    constructor(unit) {
        this.unit = unit;
        this.html = $('<div class="battleCell"></div>');
        this.html.html(this.unit.html);
        this.html.append(this.unit.HPB.html);
        this.html.append(this.unit.SPB.html);
        this.html.append(this.unit.ATB.html);
    }
}