import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Meta } from './meta';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MetaService {
  private metaUrl = 'http://localhost:3000/api/meta';
  private meta: Meta;

  constructor(private http: HttpClient) {}

  getMeta(): Observable<Meta> {
    return new Observable(observer => {
      if (this.meta) {
        observer.next(this.meta);
        return observer.complete();
      }
      this.http.get(this.metaUrl).subscribe((meta: Meta) => {
        this.meta = meta;
        observer.next(meta);
        observer.complete();
      });
    });
  }
}
