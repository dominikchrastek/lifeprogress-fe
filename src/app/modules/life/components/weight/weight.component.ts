import { Meta } from './../../../../services/meta';
import { Observable } from 'rxjs/Rx';
import { User } from './../../../../services/user';
import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { WeightService } from '../../services/weight.service';
import { Weight, PostWeight } from '../../services/weight';
import { MetaService } from '../../../../services/meta.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'life-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css'],
})
export class WeightComponent implements OnInit {
  weights$: Observable<Weight[]>;
  meta$: Observable<Meta>;

  constructor(
    public weightService: WeightService,
    private metaService: MetaService,
    private userService: UserService,
  ) {}

  getMeta(): void {
    this.meta$ = this.metaService.getMeta();
  }

  getWeight() {
    this.weights$ = this.userService
      .getUser()
      .flatMap(user => this.weightService.fetchWeights(user.id));
  }

  saveWeight = (weight: PostWeight) => {
    this.weights$ = this.userService
      .getUser()
      .flatMap(user => this.weightService.addWeight(user.id, weight));
  };

  ngOnInit() {
    this.getMeta();
    this.getWeight();
  }
}
