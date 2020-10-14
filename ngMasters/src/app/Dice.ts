import { LootRating } from './shared/enums/enumLootRating';

/**
 * defines an item which may be in a loot table
 * the lower the number,
 * the lower the chance of it dropping
 */
export interface ILootItem {
  lootWeight: number;
}

/**
 * defines an item with a drawable rarity
 */
export interface IDrawableRarity {
  lootRating: LootRating;
}

/**
 * Basic dice interface
 */
export interface IDice {
  diceId: number;
  name: string;
  sides: number;
}

/**
 * Collectable dice interface
 */
export interface ICollectableDice extends IDice, IDrawableRarity {

}

/**
 * defines a collectable dice
 */
export class Dice implements ICollectableDice, ILootItem {
  diceId: number;
  name: string;
  sides: number;
  lootWeight: number;
  lootRating: LootRating;
}

/**
 * defines a dice that is owned by a player
 */
export class UserDice implements ICollectableDice {
  id: number;
  diceId: number;
  name: string;
  sides: number;
  lootRating: LootRating;

  constructor(id: number, dice: ICollectableDice) {
    this.id = id;
    this.diceId = dice.diceId;
    this.name = dice.name;
    this.sides = dice.sides;
    this.lootRating = dice.lootRating;
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
  resultId: number;

  constructor (result: number, init?: Partial<IDice>) {
    // this object initialisation is done by taking any
    // IDice implementing object and assigning those
    // properties to the matching IDice properties on
    // this DiceHistory object
    Object.assign(this, init);
    this.result = result;
  }
}
