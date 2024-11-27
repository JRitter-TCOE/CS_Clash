export function Tenacity(unit, action) {
    if (action === 'damage') {
        unit.SPB.current = unit.SPB.current + 5 > unit.SPB.max ? unit.SPB.max : unit.SPB.current + 5;
        unit.SPB.update();
    }
}