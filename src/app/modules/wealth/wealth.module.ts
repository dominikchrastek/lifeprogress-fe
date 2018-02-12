import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WealthRoutingModule } from './wealth-routing.module';
import { WealthDashboardComponent } from './wealth-dashboard/wealth-dashboard.component';

@NgModule({
  imports: [CommonModule, WealthRoutingModule],
  declarations: [WealthDashboardComponent],
})
export class WealthModule {}
