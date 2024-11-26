export function BruteForce(user, target) {
    const dmg = user.getEffectiveStats().pow;
    target.HPB.current -= dmg;
    target.HPB.update();
}