import { DmgCounter } from "../../hud/DmgCounter.js";

export function MegaByte(user, targets) {
    const target = targets[Math.floor(Math.random()*targets.length)];
    const dmg = user.getEffectiveStats().pow + 2;
    target.changeAttribute('HPB', -dmg);
    new DmgCounter(dmg, target);
}