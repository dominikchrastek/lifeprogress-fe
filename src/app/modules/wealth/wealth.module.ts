import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WealthRoutingModule } from './wealth-routing.module';
import { WealthDashboardComponent } from './wealth-dashboard/wealth-dashboard.component';
import { WsourceComponent } from './components/wsource/wsource.component';
import { WsourceService } from './services/wsource.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, WealthRoutingModule, FormsModule],
  providers: [WsourceService],
  declarations: [WealthDashboardComponent, WsourceComponent],
})
export class WealthModule {}
