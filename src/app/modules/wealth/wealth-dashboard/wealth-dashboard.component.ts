import { WsourceService } from './../services/wsource.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { Meta } from '../../../services/meta';
import { MetaService } from '../../../services/meta.service';
import { WSource } from '../services/wsource';
@Component({
  selector: 'app-wealth-dashboard',
  templateUrl: './wealth-dashboard.component.html',
  styleUrls: ['./wealth-dashboard.component.css'],
})
export class WealthDashboardComponent implements OnInit {
  meta$: Observable<Meta>;
  wsources$: Observable<WSource[]>;
  constructor(
    private metaService: MetaService,
    private wsourceService: WsourceService,
  ) {}

  ngOnInit() {
    this.meta$ = this.metaService.getMeta();
    this.wsources$ = this.wsourceService.get();
  }
}
