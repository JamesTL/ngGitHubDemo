import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { IGitHubRepo, IGitHubUser } from 'src/app/app.model';
import { GithubDataService } from 'src/app/services/data-services/github-data.service';
import { GituhubHttpService } from 'src/app/services/http-services/gituhub-http.service';


@Component({
  selector: 'app-github-user-repos-list',
  templateUrl: './github-user-repos-list.component.html',
  styleUrls: ['./github-user-repos-list.component.scss']
})
export class GithubUserReposListComponent implements OnInit, OnDestroy {
   /** to unsubscribe to one or more subscriptions*/
   private readonly ngUnsubscribe = new Subject();

  gitHubUserReposList:IGitHubRepo[] = [];
  githubUser: IGitHubUser = {} as IGitHubUser;
  userLoginName: string = '';

  constructor(
    private readonly githubDataService: GithubDataService, 
    private readonly  route: ActivatedRoute
  ) { 


    this.route.params
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((params)=>{
        this.userLoginName = params['login-name'];
        this.githubDataService.getGithubUser(this.userLoginName);
        this.githubDataService.getGithubUserRepos(this.userLoginName);
    })    

  }

  ngOnInit(): void {
    this.githubDataService.githubUserRepoList$
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(
      (data) => {
        this.gitHubUserReposList = data;
      }
    )

    this.githubDataService.githubUser$
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(
      (data) => {
        this.githubUser = data;
      }
    )

  
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
}


}
