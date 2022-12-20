import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Observable, Subject } from 'rxjs';
import { combineLatestWith, takeUntil } from 'rxjs/operators';
import { IGitHubRepo, IGitHubUser } from 'src/app/app.model';
import { GithubDataService } from 'src/app/services/data-services/github-data.service';




@Component({
  selector: 'app-github-user-repos-list',
  templateUrl: './github-user-repos-list.component.html',
  styleUrls: ['./github-user-repos-list.component.scss']
})
export class GithubUserReposListComponent implements OnInit, OnDestroy {
   /** to unsubscribe to one or more subscriptions*/
   private readonly ngUnsubscribe = new Subject();

gitHubUserReposList:IGitHubRepo[] = [];
  githubUser: IGitHubUser = {} as IGitHubUser ;
  userLoginName: string = '';
  loading: boolean = false;



  constructor(
    private readonly githubDataService: GithubDataService, 
    private readonly  route: ActivatedRoute
  ) { 

    this.loading = true;
    this.route.params
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((params)=>{
        this.userLoginName = params['login-name'];
        this.githubDataService.getGithubUser(this.userLoginName);
        this.githubDataService.getGithubUserRepos(this.userLoginName);
    })    

  }

  ngOnInit(): void {

    this.loadData();

  }

  /** loadData */
  loadData(){
  const  repos$: Observable<IGitHubRepo[]> = this.githubDataService.githubUserRepoList$;
  const user$: Observable<IGitHubUser> =  this.githubDataService.githubUser$;
   
    repos$
    .pipe(combineLatestWith(user$))
    .subscribe(
        ([repos, user]) =>{

          this.gitHubUserReposList=repos;
          this.githubUser = user
          this.loading = false
        }
    )
  }

  ngOnDestroy(): void {
    this.githubDataService.updateGithubUserRepoList([]);
    this.githubDataService.updateGithubUser({}as IGitHubUser);

    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
}


}
