import { DmgCounter } from "../../hud/DmgCounter.js";

export function Macro(user, targets) {
    const dmg = user.getEffectiveStats().pow;

    for (let target of targets) {
        target.changeAttribute('HPB', -dmg);
        new DmgCounter(dmg, target);
    }
    
}