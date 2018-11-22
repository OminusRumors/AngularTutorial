import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AppComponent } from './app.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserShowComponent } from './user-show/user-show.component';

const routes: Routes = [
  {
    path: 'users/create', 
    component: CreateUserComponent
  },
  {
    path: 'users', 
    component: AppComponent
  },
  {
    path: 'users/:id', 
    component: UserShowComponent
  },
  {
    path: 'users/edit/:id',
    component: EditUserComponent
  },
  {
    path: 'people', 
    component: PeopleComponent
  },
  {
    path: 'tasks', 
    component: TasksComponent
  },
  {
    path: '**', 
    redirectTo: '/people', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
