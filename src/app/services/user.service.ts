import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { Response } from '../models/response';

@Injectable()
export class UserService {
  private userUrl = 'http://localhost:3000/api/user';
  private subject = new BehaviorSubject<User>(null);
  private user$: Observable<User> = this.subject.asObservable();

  constructor(private http: HttpClient) {
    // TODO: sign in
  }

  getUserId() {
    return this.subject.getValue().id;
  }

  getUser(): Observable<User> {
    const id = '8cbd81c0-9f94-44cc-8eac-6798720bbf67';
    if (this.subject.getValue()) {
      return this.subject;
    }
    return this.http
      .get<Response<User>>(`${this.userUrl}/${id}`)
      .map(user => user.data)
      .do(user => {
        this.subject.next(user);
      });
  }
}
