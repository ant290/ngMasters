import { DiceService } from './../services/dice.service';
import { Component, OnInit } from '@angular/core';
import { Dice } from '../Dice';

@Component({
  selector: 'app-dice-list',
  templateUrl: './dice-list.component.html',
  styleUrls: ['./dice-list.component.css']
})
export class DiceListComponent implements OnInit {

  // expose props for binding
  diceList: Dice[];
  allDiceList: Dice[];
  selectedDice: Dice;

  constructor(private diceService: DiceService) { }

  ngOnInit() {
    this.getDiceList();
    this.getAllDice();
  }

  getDiceList(): void {
    this.diceService.getDiceList().subscribe(diceList => this.diceList = diceList);
  }

  getAllDice(): void {
    this.diceService.getAllDiceList().subscribe(diceList => this.allDiceList = diceList);
  }

  onSelect(dice: Dice): void {
    this.selectedDice = dice;
  }

}
