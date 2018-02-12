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
  meta: Meta;
  user: User;

  constructor(
    private metaService: MetaService,
    private userService: UserService,
  ) {}

  getMeta(): void {
    this.metaService.getMeta().subscribe(meta => (this.meta = meta));
  }
  getUser(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.getMeta();
    this.getUser();
  }
}
