import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDiceComponent } from './my-dice.component';
import { DiceService } from '../services/dice.service';
import { Dice, UserDice } from '../Dice';
import { UserDiceList, AllDice } from '../MockDiceList';
import { Observable, of } from 'rxjs';
import { DiceDetailComponent } from '../dice-detail/dice-detail.component';
import { FormsModule } from '@angular/forms';

class MockDiceService {
  diceList: Dice[];

  getUserDiceList(): Observable<UserDice[]> {
    return of(UserDiceList);
  }

  getAllDiceList(): Observable<Dice[]> {
    return of(AllDice);
  }
}

describe('DiceListComponent', () => {

  const mockDiceService = new MockDiceService();

  let component: MyDiceComponent;
  let fixture: ComponentFixture<MyDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDiceComponent, DiceDetailComponent ],
      imports: [FormsModule],
      providers: [
        {provide: DiceService, useValue: mockDiceService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
