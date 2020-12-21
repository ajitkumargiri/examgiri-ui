import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'college', loadChildren: () => import('./entities/college/college.module').then(m => m.CollegeModule) },
    {path: '**', redirectTo: 'home'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
