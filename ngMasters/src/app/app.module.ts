import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDiceComponent } from './my-dice/my-dice.component';
import { DiceDetailComponent } from './dice-detail/dice-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BattleComponent } from './battle/battle.component';
import { DiceListComponent } from './shared/dice-list/dice-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceListComponent,
    MyDiceComponent,
    DiceDetailComponent,
    DashboardComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
