import { WSource } from './../../services/wsource';
import { Component, OnInit, Input } from '@angular/core';
import { WsourceService } from '../../services/wsource.service';
import { MetaUnit } from '../../../../services/meta';

@Component({
  selector: 'wealth-wsource',
  templateUrl: './wsource.component.html',
  styleUrls: ['./wsource.component.css'],
})
export class WsourceComponent implements OnInit {
  @Input() types: MetaUnit[];
  @Input() currencies: MetaUnit[];
  @Input() wsources: WSource[];
  type: MetaUnit;
  currency: MetaUnit;
  name: string = '';

  constructor(private wsource: WsourceService) {}

  save() {
    this.wsource.create({
      name: this.name,
      type: this.type.id,
      currencies: this.currencies,
    });
  }

  ngOnInit() {
    this.type = this.types[0];
    this.currency = this.currencies[0];
    console.log(this.wsources);
  }
}
