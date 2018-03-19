import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService } from './../../../services/user.service';
import { Response } from './../../../models/response';
import { WSRecord } from './wsrecord';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';

// TODO: DRY
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class WsrecordService {
  private subject = new BehaviorSubject<WSRecord[]>([]);

  wsrecords$ = this.subject.asObservable();

  private url = 'http://localhost:3000/api/wsource';
  constructor(private http: HttpClient, private userService: UserService) {}

  private getUserUrl(id: string): string {
    return `http://localhost:3000/api/user/${id}/wsrecord`;
  }

  getAll(userId: string, params): Observable<WSRecord[]> {
    const url = this.getUserUrl(userId);
    return this.http
      .get<Response<WSRecord[]>>(url, { params })
      .map(res => res.data)
      .do(ws => this.subject.next(ws));
  }

  create(wsrecord: WSRecord): Observable<Object> {
    const url = this.getUserUrl(wsrecord.userId);
    return this.http.post(url, wsrecord, httpOptions).do(console.log);
  }

  fetch(userId: string): Observable<Object> {
    const url = this.getUserUrl(userId) + '/external';
    return this.http.get(url);
  }
}
