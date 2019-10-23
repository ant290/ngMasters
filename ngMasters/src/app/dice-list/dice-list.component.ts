import { DiceService } from './../services/dice.service';
import { Component, OnInit } from '@angular/core';
import { Dice, UserDice } from '../Dice';

@Component({
  selector: 'app-dice-list',
  templateUrl: './dice-list.component.html',
  styleUrls: ['./dice-list.component.css']
})
export class DiceListComponent implements OnInit {

  // expose props for binding
  diceList: UserDice[];
  allDiceList: Dice[];
  selectedDice: Dice;

  constructor(private diceService: DiceService) { }

  ngOnInit() {
    this.getUserDiceList();
    this.getAllDice();
  }

  getUserDiceList(): void {
    this.diceService.getUserDiceList().subscribe(diceList => this.diceList = diceList);
  }

  getAllDice(): void {
    this.diceService.getAllDiceList().subscribe(diceList => this.allDiceList = diceList);
  }

  onSelect(dice: Dice): void {
    this.selectedDice = dice;
  }

  collectDice(): void {
    this.diceService.serveRandomDice().subscribe(dice => {
      const newDice = new UserDice(this.diceList.length + 1, dice);
      this.diceList.push(newDice);
    });
  }

}
