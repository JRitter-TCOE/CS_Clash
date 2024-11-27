import { BattleProjectile } from "../../battle/BattleProjectile";
import { DmgCounter } from "../../hud/DmgCounter";

export function BruteForce(user, targets) {
    const target = targets[0];
    const dmg = user.getStat('pow');
    target.changeAttribute('HPB', -dmg);
    new DmgCounter(dmg, target);
    new BattleProjectile(user, target);
}