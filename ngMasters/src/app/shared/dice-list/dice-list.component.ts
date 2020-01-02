import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserDice } from 'src/app/Dice';

@Component({
  selector: 'app-dice-list',
  templateUrl: './dice-list.component.html',
  styleUrls: ['./dice-list.component.css']
})
export class DiceListComponent implements OnInit {

  @Input() diceList: UserDice[];
  @Input() maxSelections = 0;
  @Output() selectedDiceEvent = new EventEmitter<UserDice[]>();
  selectedDice: UserDice[];
  selectionError: string;

  constructor() { }

  ngOnInit() {
    this.selectedDice = [];
  }

  /**
   * adds or removes a selection from the array of selectedDice
   * @param dice the dice to be added or removed from selectedDice
   */
  onSelect(dice: UserDice): void {
    if (this.maxSelections === 0) {
      return;
    }
    if (this.isDiceSelected(dice)) {
      // remove selection
      const index = this.selectedDice.findIndex(d => d.id === dice.id);
      this.selectedDice.splice(index, 1);
      this.selectionError = undefined;
    } else {
      // check it can be added
      if (this.selectedDice.length === this.maxSelections) {
        this.selectionError = 'Only ' + this.maxSelections + ' Dice can be selected';
        return;
      }
      // add selection
      this.selectedDice.push(dice);
    }
    this.selectedDiceEvent.emit(this.selectedDice);
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

}
