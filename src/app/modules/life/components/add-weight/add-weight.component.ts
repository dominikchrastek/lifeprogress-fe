import { Component, OnInit, Input } from '@angular/core';
import { MetaUnit } from '../../../../services/meta';
import { WeightService } from '../../services/weight.service';
import { PostWeight } from '../../services/weight';

@Component({
  selector: 'life-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.css'],
})
export class AddWeightComponent implements OnInit {
  @Input() units: MetaUnit[];
  @Input() saveWeight: (PostWeight) => void;

  value: number;
  unit: MetaUnit;
  timestamp: Date;
  constructor(private weightService: WeightService) {}

  save() {
    console.log(this.unit);
    this.saveWeight({
      value: Number(this.value),
      unit: this.unit.id,
      timestamp: this.timestamp && new Date(this.timestamp).toISOString(),
    });
  }
  ngOnInit() {
    this.unit = this.units[0];
  }
}
