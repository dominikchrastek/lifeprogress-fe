import { Observable } from 'rxjs/Rx';
import { CurrencyService } from './../../services/currency.service';
import { Currency } from './../../services/currency';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wealth-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  currencies$: Observable<Currency[]>;

  constructor(private currencyService: CurrencyService) {}

  getAllCurrencies(): void {
    this.currencyService.getAll().subscribe(null, console.error);
  }

  delete = (id: string): void => {
    this.currencyService.delete(id).subscribe(null, console.error);
  };

  create = (name: string): void => {
    this.currencyService.create({ name }).subscribe(null, console.error);
  };
  ngOnInit(): void {
    this.currencies$ = this.currencyService.currencies$;
    this.getAllCurrencies();
  }
}
