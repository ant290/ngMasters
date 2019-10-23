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
   * returns a single random dice from the list of all available dice
   */
  serveRandomDice(): Observable<Dice> {
    return of(AllDice[Math.floor(Math.random() * AllDice.length)]);
  }

  /**
   * rolls a given die, returns the resulting side
   */
  roll(die: IDice): DiceHistory {
    const histDie = new DiceHistory(this.getRandomIntInclusive(1, die.sides), die);
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
