import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';
import { LayoutModuleModule } from './layout/layout-module.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { GituhubHttpService } from './services/http-services/gituhub-http.service';
import { GithubUsersListComponent } from './features/github-users-list/github-users-list.component';
import { GithubUserReposListComponent } from './features/github-user-repos-list/github-user-repos-list.component';
import { GithubDataService } from './services/data-services/github-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    GithubUsersListComponent,
    GithubUserReposListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    LayoutModuleModule,
    SharedComponentsModule
  ],
  providers: [
    GituhubHttpService,
    GithubDataService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
