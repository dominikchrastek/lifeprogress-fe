import { Component, OnInit } from '@angular/core';

import { Meta } from '../../../services/meta';
import { MetaService } from '../../../services/meta.service';
@Component({
  selector: 'app-wealth-dashboard',
  templateUrl: './wealth-dashboard.component.html',
  styleUrls: ['./wealth-dashboard.component.css'],
})
export class WealthDashboardComponent implements OnInit {
  meta: Meta;
  constructor(private metaService: MetaService) {}

  getMeta(): void {
    this.metaService.getMeta().subscribe(meta => (this.meta = meta));
  }

  ngOnInit() {
    this.getMeta();
  }
}
