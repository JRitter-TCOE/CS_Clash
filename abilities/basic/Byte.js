import { DmgCounter } from "../../hud/DmgCounter";

export function Byte(user, targets) {
    const target = targets[Math.floor(Math.random()*targets.length)];
    const dmg = user.getEffectiveStats().pow;
    target.HPB.current -= dmg;
    target.HPB.update();
    new DmgCounter(dmg, target);

    if (target.character.abilities.Passive !== 'none') {
        target.character.abilities.Passive(target, 'damage');
    }
}