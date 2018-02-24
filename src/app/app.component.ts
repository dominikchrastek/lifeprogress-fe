import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { MetaService } from './services/meta.service';
import { Meta } from './services/meta';
import { UserService } from './services/user.service';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  meta$: Observable<Meta>;
  user$: Observable<User>;

  constructor(
    private metaService: MetaService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.user$ = this.userService.getUser();
    this.meta$ = this.metaService.getMeta();
  }
}
