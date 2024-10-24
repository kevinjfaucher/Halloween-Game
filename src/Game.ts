import { Slasher, Survivor } from "./characters";
import { Chainsaw } from "./weapons";


export class Game {
    start (): void {
        const chainsaw = new Chainsaw();
        const jason = new Slasher('Hash Slinging slasher', 100, chainsaw);
        const finalGirl = new Survivor('Laurie', 80, chainsaw);

        console.log("The game begins...")
        jason.attack(finalGirl);
        finalGirl.run();

    }
}