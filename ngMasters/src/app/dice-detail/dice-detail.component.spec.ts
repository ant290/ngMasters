import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceDetailComponent } from './dice-detail.component';

describe('DiceDetailComponent', () => {
  let component: DiceDetailComponent;
  let fixture: ComponentFixture<DiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
