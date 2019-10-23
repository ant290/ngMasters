import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../Player';
import { MockPlayer } from '../MockPlayer';
import { DiceService } from './dice.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private diceService: DiceService) { }

  /**
   * returns a player object
   */
  getPlayer(): Observable<Player> {
    const player = MockPlayer;
    this.diceService.getUserDiceList().toPromise().then(
      dice => player.diceCollection = dice);
    return of(player);
  }
}
