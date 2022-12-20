import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { GitHubRepoComponent } from './git-hub-repo/git-hub-repo.component';

const sharedComponents = [
  GitHubUserComponent,
  GitHubRepoComponent
] 



@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: sharedComponents
})
export class SharedComponentsModule { }
