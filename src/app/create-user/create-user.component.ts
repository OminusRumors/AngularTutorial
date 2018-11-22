import { Component, OnInit } from '@angular/core';
import { BottleService } from '../bottle.service';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  private user: User;

  constructor(private userService: BottleService) { }

  ngOnInit() {
    this.user = new User();
  }

  create(): void {
    this.userService.create(this.user).subscribe(user => {
      this.user = user;
    })
  }
}
