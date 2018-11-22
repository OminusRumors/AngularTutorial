import { Component, OnInit } from '@angular/core';
import { BottleService } from '../bottle.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  private user: User;

  constructor(private userService: BottleService) { }

  ngOnInit() {
    this.user = new User();
  }

  update(): void {
    this.userService.update(this.user).subscribe(updatedUser => {
      console.log("Updated in Component: " + updatedUser.id)
    });
  }

}
