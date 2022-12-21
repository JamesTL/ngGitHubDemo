import { HttpClient } from '@angular/common/http';
import { Observable, Subject,of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { GithubUserReposListComponent } from './github-user-repos-list.component';

fdescribe('GithubUserReposListComponent', () => {
  let component: GithubUserReposListComponent;
  let fixture: ComponentFixture<GithubUserReposListComponent>;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
  const activateRouteSpy = jasmine.createSpyObj('ActivatedRoute',[], ['params']);
  const routeParameterMock =  {
    params: of({
      'login-name':'fooBar'
    })
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUserReposListComponent ],
      providers:[
        { provide: HttpClient, useValue: httpClientSpy},
        { provide: ActivatedRoute, useValue:routeParameterMock},
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubUserReposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
