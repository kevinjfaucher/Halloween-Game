"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knife = void 0;
const Weapon_1 = require("./Weapon");
class Knife extends Weapon_1.Weapon {
    constructor() {
        super('Knife', 20);
    }
    use() {
        console.log(`The knife is used to slash, causing ${this.damage} damage!`);
    }
}
exports.Knife = Knife;
