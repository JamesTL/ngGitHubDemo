import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUserReposListComponent } from './features/github-user-repos-list/github-user-repos-list.component';
import { GithubUsersListComponent } from './features/github-users-list/github-users-list.component';

const routes: Routes = [
  { path:'' , component: GithubUsersListComponent},
  { path:'user-repos/:login-name', component: GithubUserReposListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
