import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Weight } from '../../services/weight';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'life-weight-chart',
  templateUrl: './weight-chart.component.html',
  styleUrls: ['./weight-chart.component.css'],
})
export class WeightChartComponent implements OnChanges {
  @Input() weights: Weight[];
  data: Array<{
    name: string;
    series: Array<{
      name: string;
      value: number;
    }>;
  }>;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Weeks';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  // line, area
  autoScale = true;

  setData() {
    this.data = [
      {
        name: 'Weight',
        series: this.weights.map(weight => ({
          name: new DatePipe('en-US'.toString())
            .transform(weight.timestamp, 'yyyy-MM-dd')
            .toString(),
          value: weight.value,
        })),
      },
    ];
  }
  ngOnInit() {
    console.log(this.weights);
    this.setData();
  }
  ngOnChanges() {
    this.setData();
  }
}
