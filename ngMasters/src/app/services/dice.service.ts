import { UserDiceList, AllDice } from './../MockDiceList';
import { Dice, UserDice } from './../Dice';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

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
  roll(die: Dice): number {
    return this.getRandomIntInclusive(1, die.sides);
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
