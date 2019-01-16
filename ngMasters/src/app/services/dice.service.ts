import { DiceList } from './../MockDiceList';
import { Dice } from './../Dice';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  getDiceList(): Observable<Dice[]> {
    return of(DiceList);
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
