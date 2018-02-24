import { Currency } from './../../services/currency';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wealth-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
})
export class CurrencyListComponent implements OnInit {
  @Input() currencies: Currency[];
  @Input() delete: (string) => void;
  constructor() {}

  handleDelete(id) {
    this.delete(id);
  }

  ngOnInit() {}
}
