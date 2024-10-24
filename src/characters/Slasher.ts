import { Survivor } from "./Survivor";
import { Weapon } from "../weapons";


export class Slasher {

    constructor(public name: string, public health: number, public weapon: Weapon,){}
    
    attack(target: Survivor) {
        console.log(`${this.name} attacks ${target.name} with a ${this.weapon.name}`);
        target.takeDamage(this.weapon.damage);
    }

    takeDamage(amount: number): void {
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage! Health is now ${this.health}`)
    }

}
