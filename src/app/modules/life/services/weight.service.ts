import { User } from './../../../services/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Weight, PostWeight } from './weight';
import { Response } from '../../../models/response';

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

const sortStuff = data => {
  if (data.length > 2 && data[data.length - 2].timestamp > data.timestamp) {
    data.sort(compare);
  }
  return data;
};

@Injectable()
export class WeightService {
  private weightUrl = 'http://localhost:3000/api/user';
  private subject = new BehaviorSubject<Weight[]>([]);
  weights$: Observable<Weight[]> = this.subject.asObservable();

  constructor(private http: HttpClient, private userService: UserService) {}

  addWeight(userId: string, weight: PostWeight): Observable<Weight> {
    const url = `${this.weightUrl}/${userId}/weight`;
    return this.http
      .post<Response<Weight>>(url, weight, httpOptions)
      .map(res => res.data)
      .do(w => this.subject.next(sortStuff([w, ...this.subject.getValue()])));
  }

  fetchWeights(userId: string): Observable<Weight[]> {
    const url = `${this.weightUrl}/${userId}/weight`;
    return this.http
      .get<Response<Weight[]>>(url)
      .map(res => res.data)
      .do(weights => this.subject.next(weights));
  }
}
