import { MetaService } from './../../../../services/meta.service';
import { WsourceService } from './../../services/wsource.service';
import { Observable } from 'rxjs/Rx';
import { WSource } from './../../services/wsource';
import { Component, OnInit, Input } from '@angular/core';
import { MetaUnit, Meta } from '../../../../services/meta';

@Component({
  selector: 'wealth-wsource',
  templateUrl: './wsource.component.html',
  styleUrls: ['./wsource.component.css'],
})
export class WsourceComponent implements OnInit {
  wsources$: Observable<WSource[]>;
  meta$: Observable<Meta>;

  constructor(
    private wsourceService: WsourceService,
    private metaService: MetaService,
  ) {}

  ngOnInit() {
    this.wsources$ = this.wsourceService.wsources$;
    this.getAll();
    this.meta$ = this.metaService.getMeta();
  }

  getAll() {
    this.wsourceService.getAll().subscribe(null, console.error);
  }

  create = wsource => {
    this.wsourceService.create(wsource).subscribe(null, console.error);
  };

  delete = id => {
    this.wsourceService.delete(id).subscribe(null, console.error);
  };
}
