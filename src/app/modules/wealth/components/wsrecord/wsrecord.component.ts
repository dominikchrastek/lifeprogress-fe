import { MetaService } from './../../../../services/meta.service';
import { CurrencyService } from './../../services/currency.service';
import { WsourceService } from './../../services/wsource.service';
import { WSource } from './../../services/wsource';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../../services/currency';
import { Meta } from '../../../../services/meta';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'wealth-wsrecord',
  templateUrl: './wsrecord.component.html',
  styleUrls: ['./wsrecord.component.css'],
})
export class WsrecordComponent implements OnInit {
  wsources$: Observable<WSource[]>;
  currencies$: Observable<Currency[]>;
  constructor(
    private wsourceService: WsourceService,
    private currencyService: CurrencyService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.wsources$ = this.wsourceService.wsourcesUser$;
    this.currencies$ = this.currencyService.currencies$;
    this.wsourceService
      .getUserWsources(this.userService.getUserId())
      .subscribe(null, console.error);
    this.currencyService.getAll().subscribe(null, console.error);
  }
}
