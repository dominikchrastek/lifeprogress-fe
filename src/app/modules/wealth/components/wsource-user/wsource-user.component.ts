import { Observable } from 'rxjs/Rx';
import { WsourceService } from './../../services/wsource.service';
import { UserService } from './../../../../services/user.service';
import { User } from './../../../../services/user';
import { Component, OnInit } from '@angular/core';
import { WSource } from '../../services/wsource';

@Component({
  selector: 'wealth-wsource-user',
  templateUrl: './wsource-user.component.html',
  styleUrls: ['./wsource-user.component.css'],
})
export class WsourceUserComponent implements OnInit {
  user$: Observable<User>;
  wsourcesUser$: Observable<WSource[]>;
  wsources: WSource[];

  wsource: WSource;

  constructor(
    private userService: UserService,
    private wsourceService: WsourceService,
  ) {}

  ngOnInit() {
    this.user$ = this.userService.getUser();
    this.wsourcesUser$ = this.wsourceService.wsourcesUser$;

    this.wsourceService
      .getAll()
      .flatMap(() => this.wsourceService.getWsourcesToUserSelect())
      .subscribe(wsources => {
        this.wsources = wsources;
      }, console.error);

    this.wsourceService
      .getUserWsources(this.userService.getUserId())
      .subscribe(null, console.error);
  }

  delete = (wsId: string) => {
    this.wsourceService
      .deleteUsers(wsId, this.userService.getUserId())
      .flatMap(() => this.wsourceService.getWsourcesToUserSelect())
      .subscribe(wsources => {
        this.wsources = wsources;
      }, console.error);
  };

  handleCreate = () => {
    this.wsourceService
      .createUserWSource(this.wsource.id, this.userService.getUserId())
      .flatMap(() => this.wsourceService.getWsourcesToUserSelect())
      .subscribe(wsources => {
        this.wsources = wsources;
      }, console.error);
  };
}
