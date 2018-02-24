import { Observable } from 'rxjs/Rx';
import { Currency } from './currency';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../../../models/response';
import * as R from 'ramda';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class CurrencyService {
  private url = 'http://localhost:3000/api/currency';
  private subject = new BehaviorSubject<Currency[]>([]);
  currencies$ = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  getAll(): Observable<Currency[]> {
    return this.http
      .get<Response<Currency[]>>(this.url)
      .map(res => res.data)
      .do(currencies => this.subject.next(currencies));
  }

  get(id): Observable<Currency[]> {
    return this.http
      .get<Response<Currency[]>>(`${this.url}/${id}`)
      .map(res => res.data)
      .do(currencies => this.subject.next(currencies));
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

  create(currency): Observable<Currency> {
    return this.http
      .post<Response<Currency>>(this.url, currency, httpOptions)
      .map(res => res.data)
      .do(data => this.subject.next([data, ...this.subject.getValue()]));
  }
}
