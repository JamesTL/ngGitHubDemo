import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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

  constructor(
    private readonly githubDataService: GithubDataService, 
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.githubDataService.githubUserList$.subscribe(
      (data:[IGitHubUser]) => this.gitHubUsersList = data
    )
    // fetch user data
    this.githubDataService.getGithubUsers();

  }

  userSelected($e: string) {
    this.router.navigate(['/user-repos' , $e]); // 
  }

  ngOnDestroy(): void {

    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
}

}
