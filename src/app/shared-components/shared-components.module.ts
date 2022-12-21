import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GitHubRepoComponent } from './git-hub-repo/git-hub-repo.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

const sharedComponents = [
  GitHubUserComponent,
  GitHubRepoComponent,
  ProgressSpinnerComponent
] 


@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: sharedComponents
})
export class SharedComponentsModule { }
