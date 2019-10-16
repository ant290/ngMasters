import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  player: Player;

  constructor() { }

  ngOnInit() {
    this.player = new Player({ id: 1, username: 'Player', maxHealth: 20, currentHealth: 20 });
  }

}
