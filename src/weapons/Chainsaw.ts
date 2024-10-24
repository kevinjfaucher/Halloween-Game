import { Weapon } from "./Weapon";

export class Chainsaw extends Weapon {
    
    constructor() {
        super('Chainsaw', 40);
    }

    use(): void{
        console.log(`The chainsaw revs up, causing a massive ${this.damage} damage!`);
    }
}