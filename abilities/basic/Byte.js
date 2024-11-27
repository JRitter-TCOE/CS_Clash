import { DmgCounter } from "../../hud/DmgCounter";

export function Byte(user, targets) {
    const target = targets[Math.floor(Math.random()*targets.length)];
    const dmg = user.getStat('pow');
    target.changeAttribute('HPB', -dmg);
    new DmgCounter(dmg, target);

    if (target.character.abilities.Passive !== 'none') {
        target.character.abilities.Passive(target, 'damage');
    }
}