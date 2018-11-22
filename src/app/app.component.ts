import { Component } from '@angular/core';
import { Bottle } from 'src/app/bottle';
import { BottleService } from './bottle.service';
import { User } from 'src/app/user';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cities';

  public bottle1: Bottle = { id: 55, name: "TSORTS!" };

  public users$: Observable<User[]>;

  constructor(private bottleService: BottleService) {

  }

  ngOnInit() {
    // this.bottleService.get().subscribe(usersFromService => {
    //   console.table(usersFromService); // table prints a table based on the data, sometimes handy
    //   this.users = usersFromService;
    this.users$=this.bottleService.list();
  }
}

