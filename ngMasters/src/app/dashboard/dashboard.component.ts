import { DiceService } from './../services/dice.service';
import { Component, OnInit } from '@angular/core';
import { Dice } from '../Dice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  diceList: Dice[];

  constructor(private diceService: DiceService) { }

  ngOnInit() {
    this.getDiceList();
  }

  getDiceList(): void {
    this.diceService.getDiceList()
      .subscribe(diceList => this.diceList = diceList.slice(0, 5));
  }

}
