import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { TasksComponent } from './tasks/tasks.component';
import {HttpClientModule} from '@angular/common/http';
import { BottleComponent } from './bottle/bottle.component';
import {FormsModule} from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserShowComponent } from './user-show/user-show.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    TasksComponent,
    BottleComponent,
    CreateUserComponent,
    EditUserComponent,
    UserShowComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
