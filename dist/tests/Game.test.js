"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const characters_1 = require("../src/characters");
const weapons_1 = require("../src/weapons");
describe('Slasher Class', () => {
    it('should reduce health of survivor when attacked', () => {
        const knife = new weapons_1.Knife();
        const michael = new characters_1.Slasher('Michael', 100, knife);
        const survivor = new characters_1.Survivor('Jamie', 80, knife);
        michael.attack(survivor);
        expect(survivor.health).toBe(60);
    });
});
