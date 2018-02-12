import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User, UserData } from './user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private userUrl = 'http://localhost:3000/api/user/';
  private user: User;
  private userId: number;

  constructor(private http: HttpClient) {
    // TODO: sign in
    this.userId = 1;
  }

  getId(): number {
    return this.userId;
  }

  getUser(): Observable<User> {
    return new Observable(observer => {
      if (this.user) {
        observer.next(this.user);
        return observer.complete();
      }
      this.http.get(this.userUrl + this.userId).subscribe((user: UserData) => {
        this.user = user.data;
        observer.next(this.user);
        observer.complete();
      });
    });
  }
}
