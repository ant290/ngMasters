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
  diceHistoryView: DiceHistory[];
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
    this.diceHistoryView = this.rolledDice.slice().reverse();
    this.lastTurnDamage = total;
  }

  /**
   * updates a selection from the array of selectedDice
   * @param dice the dice in selectedDice
   */
  onSelect(dice: UserDice[]): void {
    this.selectedDice = dice;
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
