export interface Dice {
    diceId: number;
    name: string;
    sides: number;
  }

export class UserDice implements Dice {
  id: number;
  diceId: number;
  name: string;
  sides: number;

  constructor(id: number, dice: Dice) {
    this.id = id;
    this.diceId = dice.diceId;
    this.name = dice.name;
    this.sides = dice.sides;
  }
}
