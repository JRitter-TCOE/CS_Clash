import { BattleEncounter } from "./BattleEncounter";

export class Encounter {
    constructor(type, fieldUnit) {
        if (type === 'battle') {
            new BattleEncounter(fieldUnit.team);
        }
    }
}