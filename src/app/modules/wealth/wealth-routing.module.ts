import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WealthDashboardComponent } from './wealth-dashboard/wealth-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: WealthDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WealthRoutingModule {}
