import { BattleField } from "./battle/BattleField.js";
import { Bug } from "./enemyCharacters/Bug.js";
import { StudentCharacter } from "./StudentCharacter.js";


const students = [
    new StudentCharacter('student', './gifs/Character_Standing.gif'),
    new StudentCharacter('student', './gifs/Character_Standing_2.gif')
];

const enemies = [
    new Bug(),
    new Bug(),
    new Bug()
];

const battlefield = new BattleField(students, enemies);



$('body').append('<p id="info"></p>');

