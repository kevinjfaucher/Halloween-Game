"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const characters_1 = require("./characters");
const weapons_1 = require("./weapons");
class Game {
    start() {
        const chainsaw = new weapons_1.Chainsaw();
        const jason = new characters_1.Slasher('Hash Slinging slasher', 100, chainsaw);
        const finalGirl = new characters_1.Survivor('Laurie', 80, chainsaw);
        console.log("The game begins...");
        jason.attack(finalGirl);
        finalGirl.run();
    }
}
exports.Game = Game;
