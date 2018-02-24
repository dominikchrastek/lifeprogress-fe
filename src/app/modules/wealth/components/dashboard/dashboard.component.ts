import { Component, OnInit } from '@angular/core';

import { WsourceService } from './../../services/wsource.service';
import { Observable } from 'rxjs/Rx';

import { Meta } from '../../../../services/meta';
import { MetaService } from '../../../../services/meta.service';
import { WSource } from '../../services/wsource';

@Component({
  selector: 'wealth-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  meta$: Observable<Meta>;
  wsources$: Observable<WSource[]>;
  constructor(
    private metaService: MetaService,
    private wsourceService: WsourceService,
  ) {}

  ngOnInit() {
    this.meta$ = this.metaService.getMeta();
  }
}
