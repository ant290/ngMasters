import { Component, OnInit, Input } from '@angular/core';
import { Dice } from '../dice';

@Component({
  selector: 'app-dice-detail',
  templateUrl: './dice-detail.component.html',
  styleUrls: ['./dice-detail.component.css']
})
export class DiceDetailComponent implements OnInit {

  @Input() dice: Dice;

  constructor() { }

  ngOnInit() {
  }

}
