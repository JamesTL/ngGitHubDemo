import { Component, OnInit } from '@angular/core';
import { GituhubHttpService } from 'src/app/services/http-services/gituhub-http.service';


@Component({
  selector: 'app-github-user-repos-list',
  templateUrl: './github-user-repos-list.component.html',
  styleUrls: ['./github-user-repos-list.component.scss']
})
export class GithubUserReposListComponent implements OnInit {
  gitHubUserReposList:[] = [];

  constructor(
    private readonly   gituhubHttpService: GituhubHttpService
  ) { }

  ngOnInit(): void {
    this.gituhubHttpService.getGithubUserRepos('mojombo').then((response) => this.gitHubUserReposList = response.data as []);
  }


}
