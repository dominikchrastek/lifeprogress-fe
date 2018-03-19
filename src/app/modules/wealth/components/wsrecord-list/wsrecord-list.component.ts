import { WSRecord } from './../../services/wsrecord';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wealth-wsrecord-list',
  templateUrl: './wsrecord-list.component.html',
  styleUrls: ['./wsrecord-list.component.css'],
})
export class WsrecordListComponent implements OnInit {
  @Input() wsrecords: WSRecord[];
  displayedColumns = ['value', 'currency'];
  constructor() {}

  ngOnInit() {
    console.log(this.wsrecords);
  }
}
