import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IGitHubRepo, IGitHubUser } from 'src/app/app.model';
import { GituhubHttpService } from '../http-services/gituhub-http.service';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

    // source Observable subjects
    private readonly githubUserList = new BehaviorSubject<[IGitHubUser]>([{} as IGitHubUser]);
    private readonly githubUser = new BehaviorSubject<IGitHubUser>({} as IGitHubUser);
    private readonly githubUserRepoList = new BehaviorSubject<[IGitHubRepo]>([{} as IGitHubRepo]);
    // public subscribe
    public githubUserList$: Observable<[IGitHubUser]> = this.githubUserList.asObservable();
    public githubUser$: Observable<IGitHubUser> = this.githubUser.asObservable();
    public githubUserRepoList$: Observable<[IGitHubRepo]> = this.githubUserRepoList.asObservable();

  constructor(
    private readonly gituhubHttpService: GituhubHttpService,
  ) { }


  // Functions to update source functions
  public updateGithubUserList(userList: [IGitHubUser]): void {
    if (!userList) {
      return;
    }
    this.githubUserList.next(userList);
  }

  public updateGithubUser (user: IGitHubUser): void {
    if (!user) {
      return;
    }
    this.githubUser.next(user);
  }

  public  updateGithubUserRepoList (repoList:[IGitHubRepo]): void {
    if (!repoList) {
      return;
    }
    this.githubUserRepoList.next(repoList);
  }


  /**
   * Get Github User List and set next value of Behavior Subject
   */
  public getGithubUsers(): void {

    this.gituhubHttpService.getGithubUsers().then((response) =>{

        this.updateGithubUserList(response.data)
    })

  }

  /**
   * Get specific Github User and set next value of Behavior Subject
   */
  public getGithubUser(userLoginName: string):void{
    if(!userLoginName) { return;};

    this.gituhubHttpService.getSingleGithubUser(userLoginName).then((response) =>{

      this.updateGithubUser(response.data);
    })

}

  /**
   * Get Github User repos List and set next value of Behavior Subject
   */
  public getGithubUserRepos(userLoginName: string):void{
        if(!userLoginName) { return ;};

        this.gituhubHttpService.getGithubUserRepos(userLoginName).then((response) =>{

          this.updateGithubUserRepoList(response.data);
        })

  }
}
