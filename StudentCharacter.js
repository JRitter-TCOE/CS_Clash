import { BruteForce } from "./abilities/basic/BruteForce";
import { NoAcc } from "./equipment/accessories/NoAcc";
import { Hoodie } from "./equipment/armor/Hoodie";
import { Keyboard } from "./equipment/weapons/Keyboard";

export class StudentCharacter {
    constructor(name, sprite) {
        this.name = name;
        this.sprite = sprite;
        this.stats = {
            pow: 1,
            spd: 1,
            def: 1,
            spc: 1,
            lck: 1
        }
        this.equipment = {
            weapon: new Keyboard(),
            armor: new Hoodie(),
            acc: new NoAcc()
        }
        this.abilities = {
            'Basic': BruteForce,
            'Special': 'Macro',
            'Passive': 'none'
        }
    }

    getEffectiveStats() {
        return {
            pow: this.stats.pow + this.equipment.weapon.pow + this.equipment.armor.pow + this.equipment.acc.pow,
            spd: this.stats.spd + this.equipment.weapon.spd + this.equipment.armor.spd + this.equipment.acc.spd,
            def: this.stats.def + this.equipment.weapon.def + this.equipment.armor.def + this.equipment.acc.def,
            spc: this.stats.spc + this.equipment.weapon.spc + this.equipment.armor.spc + this.equipment.acc.spc,
            lck: this.stats.lck + this.equipment.weapon.lck + this.equipment.armor.lck + this.equipment.acc.lck,
        }
    }
}