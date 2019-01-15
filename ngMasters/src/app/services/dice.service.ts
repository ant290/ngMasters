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
}
