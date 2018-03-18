import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
  private subjectUser = new BehaviorSubject<WSource[]>([]);

  wsources$ = this.subject.asObservable();
  wsourcesUser$ = this.subjectUser.asObservable();

  constructor(private http: HttpClient, private userService: UserService) {}

  private getUserUrl(id: string): string {
    return `http://localhost:3000/api/user/${id}/wsource`;
  }
  getAll(): Observable<WSource[]> {
    return this.http
      .get<Response<WSource[]>>(this.url)
      .map(res => res.data)
      .do(ws => this.subject.next(ws));
  }

  getWsourcesToUserSelect(): Observable<WSource[]> {
    return Observable.of(
      R.without(this.subjectUser.getValue(), this.subject.getValue()),
    );
  }

  createUserWSource(wsId: string, userId: string) {
    const url = `${this.getUserUrl(userId)}/${wsId}`;
    return this.http.post(url, null, httpOptions).do(() => {
      const ws = this.subject.getValue().find(R.propEq('id', wsId));
      return this.subjectUser.getValue()
        ? this.subjectUser.next([ws, ...this.subjectUser.getValue()])
        : this.subjectUser.next([ws]);
    });
  }

  getUserWsources(userId: string) {
    const url = this.getUserUrl(userId);
    return this.http
      .get<Response<WSource[]>>(url)
      .map(res => res.data)
      .do(ws => (ws ? this.subjectUser.next(ws) : this.subjectUser.next([])));
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

  deleteUsers(wsId: string, userId: string): Observable<any> {
    const url = `${this.getUserUrl(userId)}/${wsId}`;
    return this.http
      .delete(url)
      .do(() =>
        this.subjectUser.next(
          R.filter(c => c.id !== wsId, this.subjectUser.getValue()),
        ),
      );
  }
}
