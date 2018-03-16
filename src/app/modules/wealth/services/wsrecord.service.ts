import { Response } from './../../../models/response';
import { WSRecord } from './wsrecord';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class WsrecordService {
  private url = 'http://localhost:3000/api/wsource';
  constructor() {}

  // getAll(): Observable<WSRecord> {
  //   return this.http
  //     .get<Response<WSource[]>>(this.url)
  //     .map(res => res.data)
  //     .do(ws => this.subject.next(ws));
  // }
}
