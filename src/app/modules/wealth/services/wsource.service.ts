import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../services/user.service';
import { WSource, WSourceResponse } from './wsource';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class WsourceService {
  private wsourceUrl = 'http://localhost:3000/api/wsource';
  constructor(private http: HttpClient, private userService: UserService) {}

  get(): Observable<WSource[]> {
    return this.http
      .get<WSourceResponse<WSource[]>>(this.wsourceUrl)
      .map(res => res.data);
  }

  create(wsource: WSource) {
    const url = this.wsourceUrl;
    return this.http.post(url, wsource, httpOptions).subscribe(data => {
      console.log(data);
    });
  }
}
