import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { WeightService } from '../../services/weight.service';
import { Weight, PostWeight } from '../../services/weight';
import { MetaService } from '../../../../services/meta.service';
import { MetaUnit } from '../../../../services/meta';

@Component({
  selector: 'life-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css'],
})
export class WeightComponent implements OnInit {
  weights: Weight[];
  units: MetaUnit[];

  constructor(
    public weightService: WeightService,
    private metaService: MetaService,
  ) {}

  getMeta(): void {
    this.metaService.getMeta().subscribe(meta => {
      this.units = meta.units;
    });
  }

  getWeight() {
    this.weightService.fetchWeights().subscribe();
  }

  saveWeight(weight: PostWeight) {
    this.weightService.addWeight(weight).subscribe();
  }

  ngOnInit() {
    this.getWeight();
    this.getMeta();
  }
}
