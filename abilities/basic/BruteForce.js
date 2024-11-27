import { DmgCounter } from "../../hud/DmgCounter";

export function BruteForce(user, targets) {
    const target = targets[0];
    const dmg = user.getEffectiveStats().pow;
    target.HPB.current -= dmg;
    target.HPB.update();
    new DmgCounter(dmg, target);
}