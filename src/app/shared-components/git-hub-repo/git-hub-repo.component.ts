import { Component, Input, OnInit } from '@angular/core';
import { IGitHubRepo } from 'src/app/app.model';

@Component({
  selector: 'app-git-hub-repo',
  templateUrl: './git-hub-repo.component.html',
  styleUrls: ['./git-hub-repo.component.scss']
})
export class GitHubRepoComponent implements OnInit {

  constructor() { }

  @Input() githubRepo: IGitHubRepo = { } as IGitHubRepo;

  ngOnInit(): void {
  }

}
