import { WsourceUserComponent } from './components/wsource-user/wsource-user.component';
import { WsrecordComponent } from './components/wsrecord/wsrecord.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WsourceComponent } from './components/wsource/wsource.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'currency',
    component: CurrencyComponent,
  },
  {
    path: 'wealth-source',
    component: WsourceComponent,
  },
  {
    path: 'wealth-record',
    component: WsrecordComponent,
  },
  {
    path: 'wealth-source/user',
    component: WsourceUserComponent,
  },

  {
    path: '**',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WealthRoutingModule {}
