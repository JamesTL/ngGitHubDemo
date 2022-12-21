import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IGitHubUser } from 'src/app/app.model';
import { GithubDataService } from 'src/app/services/data-services/github-data.service';

@Component({
  selector: 'app-github-users-list',
  templateUrl: './github-users-list.component.html',
  styleUrls: ['./github-users-list.component.scss']
})
export class GithubUsersListComponent implements OnInit , OnDestroy{
/** to unsubscribe to one or more subscriptions*/
private readonly ngUnsubscribe = new Subject();
  
  gitHubUsersList:IGitHubUser[] =[];
  gitHubUsersPaginationList:IGitHubUser[] =[];
  currentStartIndex: number = 0;
  currentEndIndex: number = 10;
  loading: boolean = false;

  /** Pagination variables*/
  length:number = 10;  
  pageSize:number =10;
  disabled = false;
  showFirstLastButtons = true;
  showPageSizeOptions = [];
  pageSizeOptions= [];
  hidePageSize =true
  pageIndex= 0;

  constructor(
    private readonly githubDataService: GithubDataService, 
    private readonly router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.loading = true;
    this.githubDataService.githubUserList$
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(
      (data:IGitHubUser[]) =>{ 
        this.gitHubUsersList = data;
        this.length = data.length;
        this.gitHubUsersPaginationList = data.slice(0,10);
         this.loading = false;
      }
    )
    // fetch user data
    this.githubDataService.getGithubUsers();

  }

  userSelected($e: string) {
    this.router.navigate(['/user-repos' , $e]); // 
  }

  /** handle pagination events  - recalculate pagination index values */
  handlePageEvent($event: PageEvent){
    this.gitHubUsersPaginationList = this.gitHubUsersList.slice( $event.pageIndex*10, ($event.pageIndex*10) + 10)
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }

}
