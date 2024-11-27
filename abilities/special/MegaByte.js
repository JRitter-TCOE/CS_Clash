import { DmgCounter } from "../../hud/DmgCounter.js";

export function MegaByte(user, targets) {
    const target = targets[0];
    const dmg = user.getEffectiveStats().pow + 2;
    target.HPB.current -= dmg;
    target.HPB.update();
    new DmgCounter(dmg, target);
}