import { Component, OnInit } from '@angular/core';
import { Dice } from './Dice';
import { DiceList } from './MockDiceList';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  // expose props for binding
  diceList = DiceList;
  selectedDice: Dice;

  constructor() { }

  ngOnInit() {
  }

  onSelect(dice: Dice): void {
    this.selectedDice = dice;
  }

}
