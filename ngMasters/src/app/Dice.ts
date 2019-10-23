export interface IDice {
    diceId: number;
    name: string;
    sides: number;
  }

export class Dice implements IDice {
  diceId: number;
  name: string;
  sides: number;
}

export class UserDice implements IDice {
  id: number;
  diceId: number;
  name: string;
  sides: number;

  constructor(id: number, dice: IDice) {
    this.id = id;
    this.diceId = dice.diceId;
    this.name = dice.name;
    this.sides = dice.sides;
  }
}

export class DiceHistory implements IDice {
  diceId: number;
  name: string;
  sides: number;
  result: number;

  constructor (result: number, init?: Partial<IDice>) {
    Object.assign(this, init);
    this.result = result;
  }
}
