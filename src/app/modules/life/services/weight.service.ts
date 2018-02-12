import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Weight, WeightResponse, PostWeight } from './weight';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../services/user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
function compare(a: Weight, b: Weight) {
  if (a.timestamp < b.timestamp) {
    return -1;
  }
  if (a.timestamp > b.timestamp) {
    return 1;
  }
  return 0;
}

@Injectable()
export class WeightService {
  private weightUrl = 'http://localhost:3000/api/user';
  weights: Weight[] = [];

  constructor(private http: HttpClient, private userService: UserService) {}

  fetchWeights(): Observable<Weight[]> {
    const url = `${this.weightUrl}/${this.userService.getId()}/weight`;
    return new Observable(observer => {
      this.http
        .get<WeightResponse<Weight[]>>(url)
        .subscribe((res: WeightResponse<Weight[]>) => {
          if (res.data) {
            this.weights = res.data;
            observer.next(this.weights);
            observer.complete();
          }
          observer.complete();
        });
    });
  }

  addWeight(weight: PostWeight): Observable<Weight[]> {
    const url = `${this.weightUrl}/${this.userService.getId()}/weight`;
    return new Observable(observer => {
      return this.http
        .post<WeightResponse<Weight>>(url, weight, httpOptions)
        .subscribe(({ data }) => {
          this.weights = [...this.weights, data];
          // if the last's timestamp is smaller than the last's - 1, then sort it
          if (
            this.weights.length > 2 &&
            this.weights[this.weights.length - 2].timestamp > data.timestamp
          ) {
            this.weights.sort(compare);
          }
          observer.next(this.weights);
          observer.complete();
        });
    });
  }
}
