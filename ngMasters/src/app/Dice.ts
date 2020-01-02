export interface IDice {
  diceId: number;
  name: string;
  sides: number;
}

/**
 * defines a collectable dice
 */
export class Dice implements IDice {
  diceId: number;
  name: string;
  sides: number;
}

/**
 * defines a dice that is owned by a player
 */
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

/**
 * used to store previous dice roll results
 */
export class DiceHistory implements IDice {
  diceId: number;
  name: string;
  sides: number;
  result: number;

  constructor (result: number, init?: Partial<IDice>) {
    // this object initialisation is done by taking any
    // IDice implementing object and assigning those
    // properties to the matching IDice properties on
    // this DiceHistory object
    Object.assign(this, init);
    this.result = result;
  }
}
