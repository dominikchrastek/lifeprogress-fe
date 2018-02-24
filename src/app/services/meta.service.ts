import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Meta } from './meta';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class MetaService {
  private metaUrl = 'http://localhost:3000/api/meta';
  private subject = new BehaviorSubject<Meta>(null);
  meta$: Observable<Meta> = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  getMeta(): Observable<Meta> {
    if (this.subject.getValue()) {
      return this.subject;
    }
    return this.http.get<Meta>(this.metaUrl).do(meta => {
      this.subject.next(meta);
    });
  }
}
