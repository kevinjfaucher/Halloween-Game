import { Weapon } from "../weapons";
import { Slasher } from "./Slasher";


export class Survivor {

    constructor(public name: string, public health: number, public weapon: Weapon) {}

    attack(target: Slasher) {
        console.log(`${this.name} attacks ${target.name} with a ${this.weapon.name}`);
        target.takeDamage(this.weapon.damage);
    }

    takeDamage(amount: number): void {
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage! Health is now ${this.health}`)
    }

    run(): void {
        console.log(`${this.name} tries to run away!`)
    }

    superPower(): void {
        console.log(`This isn't even my final form: LEROY JENKINSSSSSSSS!!!!!!!!!!`);
    }

}