import { DmgCounter } from "../../hud/DmgCounter";

export function Byte(user, target) {
    const dmg = user.getEffectiveStats().pow;
    target.HPB.current -= dmg;
    target.HPB.update();
    const dmgCounter = new DmgCounter(dmg, target);
}