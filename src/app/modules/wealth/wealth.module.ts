import { CurrencyService } from './services/currency.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WealthRoutingModule } from './wealth-routing.module';
import { WsourceComponent } from './components/wsource/wsource.component';
import { WsourceService } from './services/wsource.service';
import { FormsModule } from '@angular/forms';
import { CurrencyComponent } from './components/currency/currency.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CurrencyAddComponent } from './components/currency-add/currency-add.component';
import { WsourceAddComponent } from './components/wsource-add/wsource-add.component';
import { WsourceListComponent } from './components/wsource-list/wsource-list.component';

@NgModule({
  imports: [CommonModule, WealthRoutingModule, FormsModule],
  providers: [WsourceService, CurrencyService],
  declarations: [
    WsourceComponent,
    CurrencyComponent,
    DashboardComponent,
    CurrencyListComponent,
    CurrencyAddComponent,
    WsourceAddComponent,
    WsourceListComponent,
  ],
})
export class WealthModule {}
