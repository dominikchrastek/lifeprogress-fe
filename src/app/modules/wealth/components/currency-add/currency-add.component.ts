import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wealth-currency-add',
  templateUrl: './currency-add.component.html',
  styleUrls: ['./currency-add.component.css'],
})
export class CurrencyAddComponent implements OnInit {
  @Input() create: (string) => void;
  name: string;

  constructor() {}

  handleCreate() {
    this.create(this.name);
  }
  ngOnInit() {}
}
