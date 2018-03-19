import { WsrecordService } from './../../services/wsrecord.service';
import { MetaService } from './../../../../services/meta.service';
import { CurrencyService } from './../../services/currency.service';
import { WsourceService } from './../../services/wsource.service';
import { WSource } from './../../services/wsource';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { addDays, subDays } from 'date-fns';
import { Currency } from '../../services/currency';
import { Meta } from '../../../../services/meta';
import { UserService } from '../../../../services/user.service';
import { WSRecord } from '../../services/wsrecord';

@Component({
  selector: 'wealth-wsrecord',
  templateUrl: './wsrecord.component.html',
  styleUrls: ['./wsrecord.component.css'],
})
export class WsrecordComponent implements OnInit {
  wsources$: Observable<WSource[]>;
  currencies$: Observable<Currency[]>;
  wsrecords$: Observable<WSRecord[]>;

  from: Date = subDays(new Date(), 10);
  to: Date = addDays(new Date(), 10);

  constructor(
    private wsourceService: WsourceService,
    private currencyService: CurrencyService,
    private userService: UserService,
    private wsrecordService: WsrecordService,
  ) {}

  ngOnInit() {
    const userId = this.userService.getUserId();
    this.wsources$ = this.wsourceService.wsourcesUser$;
    this.currencies$ = this.currencyService.currencies$;
    this.wsrecords$ = this.wsrecordService.wsrecords$;

    this.wsourceService.getUserWsources(userId).subscribe(null, console.error);
    this.currencyService.getAll().subscribe(null, console.error);
    this.wsrecordService
      .getAll(userId, {
        from: this.from.toISOString(),
        to: this.to.toISOString(),
      })
      .subscribe(null, console.error);
  }

  fetch() {
    this.wsrecordService
      .fetch(this.userService.getUserId())
      .subscribe(null, console.error);
  }
}
