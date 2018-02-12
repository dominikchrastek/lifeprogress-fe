import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LifeRoutingModule } from './life-routing.module';
import { WeightService } from './services/weight.service';
import { WeightComponent } from './components/weight/weight.component';
import { WeightChartComponent } from './components/weight-chart/weight-chart.component';
import { AddWeightComponent } from './components/add-weight/add-weight.component';
import { MetaService } from '../../services/meta.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [CommonModule, LifeRoutingModule, NgxChartsModule, FormsModule],
  declarations: [WeightComponent, WeightChartComponent, AddWeightComponent],
  providers: [WeightService, MetaService],
})
export class LifeModule {}
