"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chainsaw = void 0;
const Weapon_1 = require("./Weapon");
class Chainsaw extends Weapon_1.Weapon {
    constructor() {
        super('Chainsaw', 40);
    }
    use() {
        console.log(`The chainsaw revs up, causing a massive ${this.damage} damage!`);
    }
}
exports.Chainsaw = Chainsaw;
