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
    path: '**',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WealthRoutingModule {}
