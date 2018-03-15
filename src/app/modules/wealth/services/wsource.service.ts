import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../services/user.service';
import { WSource } from './wsource';
import { Response } from '../../../models/response';
import * as R from 'ramda';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class WsourceService {
  private url = 'http://localhost:3000/api/wsource';
  private subject = new BehaviorSubject<WSource[]>([]);
  wsources$ = this.subject.asObservable();

  constructor(private http: HttpClient, private userService: UserService) {}

  getAll(): Observable<WSource[]> {
    return this.http
      .get<Response<WSource[]>>(this.url)
      .map(res => res.data)
      .do(ws => this.subject.next(ws));
  }

  create(wsource: WSource) {
    return this.http
      .post<Response<WSource>>(this.url, wsource, httpOptions)
      .map(res => res.data)
      .do(
        ws =>
          this.subject.getValue()
            ? this.subject.next([ws, ...this.subject.getValue()])
            : this.subject.next([ws]),
      );
  }

  // now it can delete just unused currency
  // e.g if secondary key is used, then it will fail
  delete(id): Observable<any> {
    return this.http
      .delete(`${this.url}/${id}`)
      .do(() =>
        this.subject.next(R.filter(c => c.id !== id, this.subject.getValue())),
      );
  }
}
