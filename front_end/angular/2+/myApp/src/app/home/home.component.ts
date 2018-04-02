import { Component, OnInit } from '@angular/core';

import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private currentUser: User;

  constructor(
    private userSerivce: UserService
  ) {}

  logOut() {
    this.userSerivce.purgeAuth();
  }

  ngOnInit() {
    this.userSerivce.getCurrentuser().subscribe(user => {
      this.currentUser = user;
    });
  }

}
