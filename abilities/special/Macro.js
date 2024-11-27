import { DmgCounter } from "../../hud/DmgCounter.js";

export function Macro(user, targets) {
    const dmg = user.getEffectiveStats().pow;

    for (let target of targets) {
        target.HPB.current -= dmg;
        target.HPB.update();
        new DmgCounter(dmg, target);
    }
    
}