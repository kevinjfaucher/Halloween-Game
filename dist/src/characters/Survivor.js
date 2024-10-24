"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Survivor = void 0;
class Survivor {
    constructor(name, health, weapon) {
        this.name = name;
        this.health = health;
        this.weapon = weapon;
    }
    attack(target) {
        console.log(`${this.name} attacks ${target.name} with a ${this.weapon.name}`);
        target.takeDamage(this.weapon.damage);
    }
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage! Health is now ${this.health}`);
    }
    run() {
        console.log(`${this.name} tries to run away!`);
    }
    superPower() {
        console.log(`This isn't even my final form: LEROY JENKINSSSSSSSS!!!!!!!!!!`);
    }
}
exports.Survivor = Survivor;
