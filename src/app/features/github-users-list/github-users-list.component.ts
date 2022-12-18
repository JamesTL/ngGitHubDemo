import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GituhubHttpService } from 'src/app/services/http-services/gituhub-http.service';


@Component({
  selector: 'app-github-users-list',
  templateUrl: './github-users-list.component.html',
  styleUrls: ['./github-users-list.component.scss']
})
export class GithubUsersListComponent implements OnInit {

  
  gitHubUsersList:[] = [];

  constructor(
    private readonly gituhubHttpService: GituhubHttpService,
    private router: Router
  ) { }

  ngOnInit(): void {

   this.gituhubHttpService.getGithubUsers().then((response) => this.gitHubUsersList = response.data as []);
  }


  userSelected(e:any) {

    console.log(e);
    this.router.navigate(['/user-repos']);

  }

}
