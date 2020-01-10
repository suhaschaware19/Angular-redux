import { Component, OnInit } from '@angular/core';
import { User } from './../../model/user.model';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../state/state';
import { Store } from '@ngrx/store';
import {UserComponent} from '../user/user.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private store: Store<AppState>,public dialog: MatDialog) {
    this.users = this.store.select(state => state.user);

   }
   addUser ():void {
    const dialog = this.dialog.open(UserComponent, {
      width: '50%',
      height: '100vh',
      position: {
        right: '0',
      },
      data: {}
    });
  }

  ngOnInit() {
  }

}
