import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { GithubDataService } from './github-data.service';
import { IGitHubRepo, IGitHubUser } from 'src/app/app.model';
import { GituhubHttpService } from '../http-services/gituhub-http.service';
import { of } from 'rxjs';



describe('GithubDataService', () => {
  let service: GithubDataService;
  let gituhubHttpService: GituhubHttpService
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
  const githubHttpServiceSpy = jasmine.createSpyObj('GituhubHttpService', ['getGithubUsers','getGithubUserRepos','getSingleGithubUser'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy},
        { provide: GituhubHttpService , useValue: githubHttpServiceSpy}
      ]
    });
    service = TestBed.inject(GithubDataService);
    gituhubHttpService = TestBed.inject(GituhubHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('public data sources', () => {

    it('should provide a data source for github user list', ()=>{
      const result = service.githubUserList$.subscribe();
      expect(result).toBeTruthy();
    });
    it('should provide a data source for github user', ()=>{
      const result = service.githubUser$.subscribe();
      expect(result).toBeTruthy();
    });
    it('should provide a data source for github users repo list', ()=>{
      const result = service.githubUserRepoList$.subscribe();
      expect(result).toBeTruthy();
    });
  
  });

  describe('update data sources', () => {

    it('should allow user list data source to be updated ', () => {
      let result: IGitHubUser[] = [];
      service.githubUserList$.subscribe(
         (data) => result = data
      );
    
      service.updateGithubUserList(mockUserList)
      expect(result).toEqual(mockUserList);
    });

    it('should allow user data source to be updated.', () => {
      let result: IGitHubUser= {} as IGitHubUser;
      service.githubUser$.subscribe(
         (data) => result = data
      );
    
      service.updateGithubUser(mockUser)
      expect(result).toEqual(mockUser);
    });
    it('should allow user repository source to be updated.', () => {
      let result: IGitHubRepo[]= [];
      service.githubUserRepoList$.subscribe(
         (data) => result = data
      );
    
      service.updateGithubUserRepoList(mockUserRepoList)
      expect(result).toEqual(mockUserRepoList);
    });
  });

});

const mockUserList: IGitHubUser[] = [
  {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "defunkt",
    "id": 2,
    "node_id": "MDQ6VXNlcjI=",
    "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/defunkt",
    "html_url": "https://github.com/defunkt",
    "followers_url": "https://api.github.com/users/defunkt/followers",
    "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
    "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
    "organizations_url": "https://api.github.com/users/defunkt/orgs",
    "repos_url": "https://api.github.com/users/defunkt/repos",
    "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
    "received_events_url": "https://api.github.com/users/defunkt/received_events",
    "type": "User",
    "site_admin": false
  }
]

const mockUser: IGitHubUser = {
  "login": "mojombo",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mojombo",
  "html_url": "https://github.com/mojombo",
  "followers_url": "https://api.github.com/users/mojombo/followers",
  "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
  "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
  "organizations_url": "https://api.github.com/users/mojombo/orgs",
  "repos_url": "https://api.github.com/users/mojombo/repos",
  "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mojombo/received_events",
  "type": "User",
  "site_admin": false
}

const mockUserRepoList : IGitHubRepo[]= [
  {
    "id": 26899533,
    "node_id": "MDEwOlJlcG9zaXRvcnkyNjg5OTUzMw==",
    "name": "30daysoflaptops.github.io",
    "full_name": "mojombo/30daysoflaptops.github.io",
    "private": false,
    "owner": {
      "login": "mojombo",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mojombo",
      "html_url": "https://github.com/mojombo",
      "followers_url": "https://api.github.com/users/mojombo/followers",
      "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
      "organizations_url": "https://api.github.com/users/mojombo/orgs",
      "repos_url": "https://api.github.com/users/mojombo/repos",
      "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mojombo/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/mojombo/30daysoflaptops.github.io",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io",
    "forks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/forks",
    "keys_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/teams",
    "hooks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/hooks",
    "issue_events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/events{/number}",
    "events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/events",
    "assignees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/assignees{/user}",
    "branches_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/branches{/branch}",
    "tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/tags",
    "blobs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/languages",
    "stargazers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/stargazers",
    "contributors_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contributors",
    "subscribers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscribers",
    "subscription_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscription",
    "commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contents/{+path}",
    "compare_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/merges",
    "archive_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/downloads",
    "issues_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues{/number}",
    "pulls_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/labels{/name}",
    "releases_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/releases{/id}",
    "deployments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/deployments",
    "created_at": "2014-11-20T06:42:06Z",
    "updated_at": "2021-04-03T10:15:42Z",
    "pushed_at": "2014-11-20T06:42:47Z",
    "git_url": "git://github.com/mojombo/30daysoflaptops.github.io.git",
    "ssh_url": "git@github.com:mojombo/30daysoflaptops.github.io.git",
    "clone_url": "https://github.com/mojombo/30daysoflaptops.github.io.git",
    "svn_url": "https://github.com/mojombo/30daysoflaptops.github.io",
    "homepage": null,
    "size": 1197,
    "stargazers_count": 7,
    "watchers_count": 7,
    "language": "CSS",
    "has_issues": false,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 2,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [

    ],
    "visibility": "public",
    "forks": 2,
    "open_issues": 0,
    "watchers": 7,
    "default_branch": "gh-pages",
    "permissions": {
      "admin": false,
      "maintain": false,
      "push": false,
      "triage": false,
      "pull": true
    }
  },
  {
    "id": 17358646,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNzM1ODY0Ng==",
    "name": "asteroids",
    "full_name": "mojombo/asteroids",
    "private": false,
    "owner": {
      "login": "mojombo",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mojombo",
      "html_url": "https://github.com/mojombo",
      "followers_url": "https://api.github.com/users/mojombo/followers",
      "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
      "organizations_url": "https://api.github.com/users/mojombo/orgs",
      "repos_url": "https://api.github.com/users/mojombo/repos",
      "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mojombo/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/mojombo/asteroids",
    "description": "Destroy your Atom editor, Asteroids style!",
    "fork": false,
    "url": "https://api.github.com/repos/mojombo/asteroids",
    "forks_url": "https://api.github.com/repos/mojombo/asteroids/forks",
    "keys_url": "https://api.github.com/repos/mojombo/asteroids/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/mojombo/asteroids/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/mojombo/asteroids/teams",
    "hooks_url": "https://api.github.com/repos/mojombo/asteroids/hooks",
    "issue_events_url": "https://api.github.com/repos/mojombo/asteroids/issues/events{/number}",
    "events_url": "https://api.github.com/repos/mojombo/asteroids/events",
    "assignees_url": "https://api.github.com/repos/mojombo/asteroids/assignees{/user}",
    "branches_url": "https://api.github.com/repos/mojombo/asteroids/branches{/branch}",
    "tags_url": "https://api.github.com/repos/mojombo/asteroids/tags",
    "blobs_url": "https://api.github.com/repos/mojombo/asteroids/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/mojombo/asteroids/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/mojombo/asteroids/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/mojombo/asteroids/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/mojombo/asteroids/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/mojombo/asteroids/languages",
    "stargazers_url": "https://api.github.com/repos/mojombo/asteroids/stargazers",
    "contributors_url": "https://api.github.com/repos/mojombo/asteroids/contributors",
    "subscribers_url": "https://api.github.com/repos/mojombo/asteroids/subscribers",
    "subscription_url": "https://api.github.com/repos/mojombo/asteroids/subscription",
    "commits_url": "https://api.github.com/repos/mojombo/asteroids/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/mojombo/asteroids/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/mojombo/asteroids/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/mojombo/asteroids/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/mojombo/asteroids/contents/{+path}",
    "compare_url": "https://api.github.com/repos/mojombo/asteroids/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/mojombo/asteroids/merges",
    "archive_url": "https://api.github.com/repos/mojombo/asteroids/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/mojombo/asteroids/downloads",
    "issues_url": "https://api.github.com/repos/mojombo/asteroids/issues{/number}",
    "pulls_url": "https://api.github.com/repos/mojombo/asteroids/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/mojombo/asteroids/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/mojombo/asteroids/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/mojombo/asteroids/labels{/name}",
    "releases_url": "https://api.github.com/repos/mojombo/asteroids/releases{/id}",
    "deployments_url": "https://api.github.com/repos/mojombo/asteroids/deployments",
    "created_at": "2014-03-03T07:40:00Z",
    "updated_at": "2022-08-06T02:13:22Z",
    "pushed_at": "2015-03-10T18:18:16Z",
    "git_url": "git://github.com/mojombo/asteroids.git",
    "ssh_url": "git@github.com:mojombo/asteroids.git",
    "clone_url": "https://github.com/mojombo/asteroids.git",
    "svn_url": "https://github.com/mojombo/asteroids",
    "homepage": null,
    "size": 185,
    "stargazers_count": 94,
    "watchers_count": 94,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 14,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 3,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [

    ],
    "visibility": "public",
    "forks": 14,
    "open_issues": 3,
    "watchers": 94,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "maintain": false,
      "push": false,
      "triage": false,
      "pull": true
    }
  }
]
