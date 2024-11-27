export class BattleProjectile {
    constructor(unit, target) {
        const start = this.getStartCoords(unit);
        const end = this.getEndCoords(target);
        
        this.html = $('<div class="projectile"></div>');
        this.html.css({top: start.top, left: start.left});
        unit.battlefield.html.append(this.html);

        setTimeout(() => this.html.css({top: end.top, left: end.left}), 50);
        setTimeout(() => this.html.remove(), 500);
    }

    getStartCoords(unit) {
        const start = unit.html.parent().offset();
        const sw = parseInt(unit.html.parent().css('width'))*.5;
        const sh = parseInt(unit.html.parent().css('height'))*.25;
        return {top: start.top + sh, left: start.left + sw};
    }

    getEndCoords(target) {
        const end = target.html.parent().offset();
        const ew = parseInt(target.html.parent().css('width'))*.5;
        const eh = parseInt(target.html.parent().css('height'))*.25;
        return {top: end.top + eh, left: end.left + ew};
    }
}