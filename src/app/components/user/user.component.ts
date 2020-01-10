import { Component, OnInit } from '@angular/core';
import { User } from './../../model/user.model';
import { AppState } from './../../state/state';
import { Store } from '@ngrx/store';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private store: Store<AppState>,private fb: FormBuilder,public dialog: MatDialogRef<UserComponent>) {
    this.createForm();
   }
   createForm() {
    this.userForm = this.fb.group({
      id: ['', Validators.required ],
      name: ['', Validators.required ],
      address: ['', Validators.required ],
      country: ['', Validators.required ]
   });
  }
  saveUser(id,name, address,country) {
    this.store.dispatch({
      type: 'SAVE_USER',
      payload: <User> {
        id: id,
        name: name,
        address: address,
        country : country
      }
    });
    this.dialog.close();
  }
  close(){
    this.dialog.close();
  }

  ngOnInit() {
  }

}
