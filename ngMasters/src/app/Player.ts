export class Player {
    id: number;
    username: string;
    maxHealth: number;
    currentHealth: number;

    public constructor(init?: Partial<Player>) {
        Object.assign(this, init);
    }
}
