import { UserDice } from './Dice';

export class Player {
    id: number;
    username: string;
    maxHealth: number;
    currentHealth: number;
    diceCollection: UserDice[];

    public constructor(init?: Partial<Player>) {
        Object.assign(this, init);
        if (!this.currentHealth) {
            this.currentHealth = this.maxHealth;
        }
    }
}
