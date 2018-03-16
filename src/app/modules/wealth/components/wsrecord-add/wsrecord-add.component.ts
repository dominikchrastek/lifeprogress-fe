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
@Component({
  selector: 'wealth-wsrecord-add',
  templateUrl: './wsrecord-add.component.html',
  styleUrls: ['./wsrecord-add.component.css'],
})
export class WsrecordAddComponent implements OnInit, OnChanges {
  @Input() wsources: WSource[];
  currencies: Currency[];

  setCurrencies = (currencies: Currency[]) => {
    this.currencies = currencies;
  };

  name: string;
  currency: Currency;
  wsource: WSource;
  value: number;

  constructor() {}

  ngOnInit() {}

  updateWSource = (wsource: WSource) => {
    this.setCurrencies(wsource.currencies);
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
    console.log('create');
  }
}
