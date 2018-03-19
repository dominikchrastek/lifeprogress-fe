import { WsrecordService } from './../../services/wsrecord.service';
import { UserService } from './../../../../services/user.service';
import { Currency } from './../../services/currency';
import { WSource } from './../../services/wsource';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as R from 'ramda';
import { MatSelectChange } from '@angular/material';
@Component({
  selector: 'wealth-wsrecord-add',
  templateUrl: './wsrecord-add.component.html',
  styleUrls: ['./wsrecord-add.component.css'],
})
export class WsrecordAddComponent implements OnInit, OnChanges {
  @Input() wsources: WSource[];
  currencies: Currency[];

  setCurrency = (currency: Currency) => {
    this.currency = currency;
  };

  setCurrencies = (currencies: Currency[]) => {
    this.currencies = currencies;
    this.setCurrency(R.head(currencies));
  };

  currency: Currency;
  wsource: WSource;
  value: number;

  constructor(
    private userService: UserService,
    private wsrecordService: WsrecordService,
  ) {}

  ngOnInit() {}

  updateWSource = (change: MatSelectChange) => {
    this.setCurrencies(change.value.currencies);
  };

  ngOnChanges() {
    if (R.isNil(this.wsource) && !R.isEmpty(this.wsources)) {
      const wsource = R.head(this.wsources);
      this.wsource = wsource;
      this.currencies = this.wsource.currencies;
      this.currency = R.head(this.wsource.currencies);
    }
  }

  handleCreate() {
    const record = {
      value: Number(this.value),
      currencyId: this.currency.id,
      wsourceId: this.wsource.id,
      userId: this.userService.getUserId(),
    };
    this.wsrecordService.create(record).subscribe(null, console.error);
  }
}
