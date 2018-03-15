import { CurrencyService } from './../../services/currency.service';
import { MetaService } from './../../../../services/meta.service';
import { WsourceService } from './../../services/wsource.service';
import { Observable } from 'rxjs/Rx';
import { WSource } from './../../services/wsource';
import { Component, OnInit, Input } from '@angular/core';
import { MetaUnit, Meta } from '../../../../services/meta';
import { Currency } from '../../services/currency';

@Component({
  selector: 'wealth-wsource',
  templateUrl: './wsource.component.html',
  styleUrls: ['./wsource.component.css'],
})
export class WsourceComponent implements OnInit {
  wsources$: Observable<WSource[]>;
  meta$: Observable<Meta>;
  currencies$: Observable<Currency[]>;

  constructor(
    private wsourceService: WsourceService,
    private metaService: MetaService,
    private currencyService: CurrencyService,
  ) {}

  ngOnInit() {
    this.wsources$ = this.wsourceService.wsources$;
    this.currencies$ = this.currencyService.currencies$;
    this.getAll();
    this.meta$ = this.metaService.getMeta();
  }

  getAll() {
    this.wsourceService.getAll().subscribe(null, console.error);
    this.currencyService.getAll().subscribe(null, console.error);
  }

  create = wsource => {
    this.wsourceService.create(wsource).subscribe(null, console.error);
  };

  delete = id => {
    this.wsourceService.delete(id).subscribe(null, console.error);
  };
}
