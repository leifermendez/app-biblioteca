import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { AddUsersComponent } from './pages/add-users/add-users.component';
import { UsersDetailComponent } from './pages/users-detail/users-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent
  },
  {
    path: 'create',
    component: AddUsersComponent
  },
  {
    path: ':id',
    component: AddUsersComponent
  },
  {
    path: 'detail/:id',
    component: UsersDetailComponent
  },
  {
    path: '**',
    pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
