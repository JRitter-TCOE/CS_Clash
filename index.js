import { BattleField } from "./battle/BattleField.js";
import { Bug } from "./enemyCharacters/Bug.js";
import { FieldGrid } from "./field/FieldGrid.js";
import { FieldUnit } from "./field/FieldUnit.js";
import { StudentCharacter } from "./StudentCharacter.js";


const students = [
    new StudentCharacter('student', './gifs/Character_Standing.gif'),
    new StudentCharacter('student', './gifs/Character_Standing_2.gif'),
    new StudentCharacter('student', './gifs/Character_Standing_2.gif'),
    new StudentCharacter('student', './gifs/Character_Standing.gif')
];







const field = new FieldGrid(5, 5);
const unit = new FieldUnit(field, 2, 2, students);

$('body').append('<p id="info"></p>');

