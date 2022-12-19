import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Octokit } from 'octokit';
import { OctokitResponse} from "@octokit/types";

const gituHUbFineGrainedAccessToken ='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';

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

   octokit;

  constructor(private readonly httpClient: HttpClient) { 

    this.octokit = new Octokit({
      auth: gituHUbFineGrainedAccessToken
    });
  
  }
  
  /** */
   async getGithubUsers(): Promise<any>{
    // const octokit = new Octokit({
    //   auth: gituHUbFineGrainedAccessToken
    // });

    const results = await this.octokit.request('GET /users', {});

    return results
  }

  /** */

  async getGithubUserRepos(username: string){

    const results = await this.octokit.request(
        `GET /users/${username}/repos`,
        {
           username: 'USERNAME' 
        }
     )

    return results

  }
  // 
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

//     'GET /users/{username}/repos{?type,sort,direction,per_page,page}',