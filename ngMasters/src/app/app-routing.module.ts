import { BattleComponent } from './battle/battle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDiceComponent } from './my-dice/my-dice.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'diceList', component: MyDiceComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'battle', component: BattleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
