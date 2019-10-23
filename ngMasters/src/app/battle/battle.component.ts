import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';
import { PlayerService } from '../services/player.service';
import { UserDice, DiceHistory } from '../Dice';
import { DiceService } from '../services/dice.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  player: Player;
  selectedDice: UserDice[];
  rolledDice: DiceHistory[];
  turn: number;
  lastTurnDamage = 0;
  selectionError: string;

  constructor(private playerService: PlayerService,
    private readonly diceService: DiceService) { }

  ngOnInit() {
    this.getPlayer();
    this.selectedDice = [];
    this.rolledDice = [];
    this.turn = 0;
  }

  getPlayer(): void {
    this.playerService.getPlayer().subscribe(player => this.player = player);
  }

  /**
   * rolls the selected dice, and deals that much damage to the player
   */
  rollDice(): void {
    this.turn += 1;
    let total = 0;
    this.selectedDice.forEach(dice => {
      const res = this.diceService.roll(dice);
      this.rolledDice.push(res);
      this.player.takeDamage(res.result);
      total += res.result;
    });
    this.lastTurnDamage = total;
  }

  /**
   * adds or removes a selection from the array of selectedDice
   * @param dice the dice to be added or removed from selectedDice
   */
  onSelect(dice: UserDice): void {
    if (this.isDiceSelected(dice)) {
      // remove selection
      const index = this.selectedDice.findIndex(d => d.id === dice.id);
      this.selectedDice.splice(index, 1);
      this.selectionError = undefined;
    } else {
      // check it can be added
      if (this.selectedDice.length === 4) {
        this.selectionError = 'Only 4 Dice can be selected';
        return;
      }
      // add selection
      this.selectedDice.push(dice);
    }
  }

  /**
   * checks to see if that UserDice is already in the selectedDice array
   * @param dice the UserDice to check
   */
  isDiceSelected(dice: UserDice): boolean {
    const found = this.selectedDice.find(function(item) {
      return item.id === dice.id;
    });
    if (found) {
      return true;
    }
    return false;
  }

  /**
   * checks to see if everything is in order for dice to be rolled
   */
  canRollDice(): boolean {
    if (this.selectedDice.length === 4 && this.player.currentHealth > 0) {
      return true;
    }
    return false;
  }
}
