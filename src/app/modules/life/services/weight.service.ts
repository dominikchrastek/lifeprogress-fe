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
          this.weights = res.data;
          observer.next(this.weights);
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
          console.log([...this.weights, data]);
          this.weights = [...this.weights, data];
          observer.next(this.weights);
          observer.complete();
        });
    });
  }
}
