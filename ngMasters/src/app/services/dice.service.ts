import { UserDiceList, AllDice } from './../MockDiceList';
import { Dice, UserDice, DiceHistory, IDice } from './../Dice';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  diceHistory: DiceHistory[];

  constructor() {
    this.diceHistory = [];
  }

  /**
   * returns the list of dice owned by the player
   */
  getUserDiceList(): Observable<UserDice[]> {
    return of(UserDiceList);
  }

  /**
   * returns the list of all dice that can be collected
   */
  getAllDiceList(): Observable<Dice[]> {
    return of(AllDice);
  }

  /**
   * returns a single dice from the list of all available dice
   * uses a loot table method
   */
  serveRandomDice(): Observable<Dice> {
    // make the loot table
    // total up all of the drop weights
    const diceByRarity: Dice[] = [];
    AllDice.forEach(val => diceByRarity.push(Object.assign({}, val)));
    const rangeTotal = diceByRarity.reduce((sum, current) => sum + current.lootWeight, 0);
    let rand = Math.floor(Math.random() * rangeTotal);

    // make sure that the loot items are in weight order (max to min)
    diceByRarity.sort((a, b) => (a.lootWeight < b.lootWeight) ? 1 : -1);

    // loop through until the correct item is found
    let i = 0;
    while (rand >= diceByRarity[i].lootWeight) {
      // random value is bigger than loot weight
      // reduce it by the loot weight and move on
      rand -= diceByRarity[i].lootWeight;
      i++;
    }
    // return the round item
    return of(diceByRarity[i]);
  }

  /**
   * rolls a given die, returns the resulting side
   */
  roll(die: IDice): DiceHistory {
    const histDie = new DiceHistory(this.getRandomIntInclusive(1, die.sides), die);
    histDie.resultId = this.diceHistory.length + 1;
    this.diceHistory.push(histDie);
    return histDie;
  }

  /**
   * randomiser
   */
  getRandomIntInclusive(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
