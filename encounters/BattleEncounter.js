import { BattleField } from "../battle/BattleField";
import { Bug } from "../enemyCharacters/Bug";

export class BattleEncounter {
    constructor(students) {
        // Assign Units
        this.students = students;
        // Create enemies
        this.enemies = [
            new Bug(),
            new Bug(),
            new Bug()
        ];
        // Save current FieldGrid
        // Load/Render Battlefield
        this.battlefield = new BattleField(this.students, this.enemies);
    }
}