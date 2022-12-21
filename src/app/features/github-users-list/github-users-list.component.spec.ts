import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IGitHubUser } from 'src/app/app.model';

import { GithubUsersListComponent } from './github-users-list.component';

describe('GithubUsersListComponent', () => {
  let component: GithubUsersListComponent;
  let fixture: ComponentFixture<GithubUsersListComponent>;

  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
  const githubDataServiceMock = jasmine.createSpyObj('HttpClient', ['getGithubUsers'],['githubUserList$',' githubUser$', 'githubUserRepoList$']);



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUsersListComponent ],
      providers:[{ provide: HttpClient, useValue: httpClientSpy} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML template', () => {
    it('should display loading spinner if component loading variable is set to true', () => {
      component.loading = true;
      fixture.detectChanges()
      const testElement = fixture.debugElement.query(By.css('[data-test-id="loadingSpinner"]'));
      expect(component.loading).toBeTrue();
      expect(testElement).toBeTruthy();
    });
    it('should  NOT display loading spinner if component loading variable is set to false', () => {
      component.loading = false;
      fixture.detectChanges()
      const testElement = fixture.debugElement.query(By.css('[data-test-id="loadingSpinner"]'));
      expect(component.loading).toBeFalse();
      expect(testElement).toBeFalsy();
    });

    it('should display paginator id loading variable is false', () => {
      component.loading = false;
      fixture.detectChanges();
      const testElementPaginator = fixture.debugElement.query(By.css('[data-test-id="paginator"]'));
     // const testElementUserList = fixture.debugElement.query(By.css('[data-test-id="usersListContainer"]'));
      expect(testElementPaginator).toBeTruthy();
     // expect(testElementUserList).toBeTruthy();
    
    });
    it('should Not display paginator id loading variable is true', () => {
      component.loading = true;
      fixture.detectChanges();
      const testElementPaginator = fixture.debugElement.query(By.css('[data-test-id="paginator"]'));
     // const testElementUserList = fixture.debugElement.query(By.css('[data-test-id="usersListContainer"]'));
      expect(testElementPaginator).toBeFalsy();
     // expect(testElementUserList).toBeTruthy();
  
    });

    it('should display user list if loading  variable is true and userList has at least one entry', () => {
      component.loading = false;
      component.gitHubUsersPaginationList= [{} as IGitHubUser];
      fixture.detectChanges();
       const testElementUserList = fixture.debugElement.query(By.css('[data-test-id="usersListContainer"]'));
       expect(testElementUserList).toBeTruthy();
      
    });
    it('should NOT display user list if loading  variable is true and userList has 0 entires', () => {
      component.loading = false;
      component.gitHubUsersPaginationList= [];
      fixture.detectChanges();
       const testElementUserList = fixture.debugElement.query(By.css('[data-test-id="usersListContainer"]'));
       expect(testElementUserList).toBeFalsy();

    });
  
  });

});
