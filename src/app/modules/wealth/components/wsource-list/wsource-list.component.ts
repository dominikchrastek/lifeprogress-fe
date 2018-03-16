import { WSource } from './../../services/wsource';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wealth-wsource-list',
  templateUrl: './wsource-list.component.html',
  styleUrls: ['./wsource-list.component.css'],
})
export class WsourceListComponent implements OnInit {
  @Input() delete: (string) => void;
  @Input() wsources: WSource[];

  displayedColumns = ['name', 'type', 'currencies', 'actions'];
  constructor() {}

  handleDelete(id) {
    this.delete(id);
  }

  ngOnInit() {}
}
