import { WsrecordService } from './services/wsrecord.service';
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
import { WsrecordAddComponent } from './components/wsrecord-add/wsrecord-add.component';
import { WsrecordComponent } from './components/wsrecord/wsrecord.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { WsourceUserComponent } from './components/wsource-user/wsource-user.component';
import { WsrecordListComponent } from './components/wsrecord-list/wsrecord-list.component';

@NgModule({
  imports: [
    CommonModule,
    WealthRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [WsourceService, CurrencyService, WsrecordService],
  declarations: [
    WsourceComponent,
    CurrencyComponent,
    DashboardComponent,
    CurrencyListComponent,
    CurrencyAddComponent,
    WsourceAddComponent,
    WsourceListComponent,
    WsrecordComponent,
    WsrecordAddComponent,
    WsourceUserComponent,
    WsrecordListComponent,
  ],
})
export class WealthModule {}
