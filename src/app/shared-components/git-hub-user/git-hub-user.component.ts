import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IGitHubUser } from 'src/app/app.model';

@Component({
  selector: 'app-git-hub-user',
  templateUrl: './git-hub-user.component.html',
  styleUrls: ['./git-hub-user.component.scss']
})
export class GitHubUserComponent implements OnInit {


  @Input() user: IGitHubUser = {} as IGitHubUser;
  @Input() userActions: boolean =true
  @Output() userSelected = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  selectedGithubUser(userLogin:string){

      if(userLogin == null) { return;}

      this.userSelected.emit(userLogin)

  }

}
