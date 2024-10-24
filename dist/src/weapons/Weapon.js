"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    use() {
        console.log(`${this.name} is used, causing ${this.damage} damage`);
    }
}
exports.Weapon = Weapon;
