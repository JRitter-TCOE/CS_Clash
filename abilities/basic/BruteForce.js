import { DmgCounter } from "../../hud/DmgCounter";

export function BruteForce(user, targets) {
    const target = targets[0];
    const dmg = user.getEffectiveStats().pow;
    target.changeAttribute('HPB', -dmg);
    new DmgCounter(dmg, target);
}