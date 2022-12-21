import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Octokit } from 'octokit';
import { environment } from './../../../environments/environment';

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GituhubHttpService {

  octokit: Octokit;

  constructor(private readonly httpClient: HttpClient) { 

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

