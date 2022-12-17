import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';
import {MatCardModule} from '@angular/material/card';


const sharedComponents = [GitHubUserComponent] 



@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: sharedComponents
})
export class SharedComponentsModule { }
