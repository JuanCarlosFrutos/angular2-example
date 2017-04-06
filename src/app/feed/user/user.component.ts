import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//MODELS
import { User } from '../../shared/models/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()  user  : User;
  @Output () addFriend : EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

}
