import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GituhubHttpService {

  octokit: Octokit;

  constructor() { 

    this.octokit = new Octokit({
      auth: environment.gituHUbFineGrainedAccessToken
    });
  }
  
  /**  get Github users */
   async getGithubUsers(): Promise<any>{
   
    const results = await this.octokit.request('GET /users{100}', {}); 

    return results
  }

  /** get github user's repos */

  async getGithubUserRepos(username: string){

    const results = await this.octokit.request(
        `GET /users/${username}/repos`,
        {
           username: 'USERNAME' 
        }
     )

    return results
  }
  
  /** get single github user */
  async getSingleGithubUser(username: string): Promise<any>{

    const results = await this.octokit.request(
        `GET /users/${username}`,
        {
          username: 'USERNAME' 
        }
      )

    return results
  }
}

