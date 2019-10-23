import { DiceService } from './../services/dice.service';
import { Component, OnInit } from '@angular/core';
import { UserDice } from '../Dice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  diceList: UserDice[];

  constructor(private diceService: DiceService) { }

  ngOnInit() {
    this.getDiceList();
  }

  getDiceList(): void {
    this.diceService.getUserDiceList()
      .subscribe(diceList => this.diceList = diceList.slice(0, 5));
  }

}
