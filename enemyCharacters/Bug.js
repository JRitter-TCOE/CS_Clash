import { Byte } from "../abilities/basic/Byte";
import { NoAcc } from "../equipment/accessories/NoAcc";
import { NoArmor } from "../equipment/armor/NoArmor";
import { NoWeapon } from "../equipment/weapons/NoWeapon";

export class Bug {
    constructor() {
        this.name = 'Bug';
        this.sprite = './gifs/bug.gif';
        this.stats = {
            pow: 1,
            spd: 1,
            def: 5,
            spc: 1,
            lck: 1
        }
        this.equipment = {
            weapon: new NoWeapon(),
            armor: new NoArmor(),
            acc: new NoAcc()
        }
        this.abilities = {
            'Basic': Byte,
            'Special': 'megabyte',
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