import { Currency } from './../../services/currency';
import { MetaUnit } from './../../../../services/meta';
import { Observable } from 'rxjs/Rx';
import { WsourceService } from './../../services/wsource.service';
import { Component, OnInit, Input } from '@angular/core';
import { WSource } from '../../services/wsource';

@Component({
  selector: 'wealth-wsource-add',
  templateUrl: './wsource-add.component.html',
  styleUrls: ['./wsource-add.component.css'],
})
export class WsourceAddComponent implements OnInit {
  @Input() wsources: WSource[];
  @Input() types: MetaUnit[];
  @Input() currencies: MetaUnit[];
  @Input() create: (any) => void;

  name: string;
  type: MetaUnit;
  currency: MetaUnit;

  constructor() {}

  ngOnInit() {
    this.type = this.types[0];
    this.currency = this.currencies[0];
  }

  handleCreate() {
    this.create({
      name: this.name,
      type: this.type.id,
      currencies: this.currencies,
    });
  }
}
