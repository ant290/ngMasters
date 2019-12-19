import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceListComponent } from './dice-list.component';

describe('DiceListComponent', () => {
  let component: DiceListComponent;
  let fixture: ComponentFixture<DiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
