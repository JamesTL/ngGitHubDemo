import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUsersListComponent } from './github-users-list.component';

describe('GithubUsersListComponent', () => {
  let component: GithubUsersListComponent;
  let fixture: ComponentFixture<GithubUsersListComponent>;

  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);

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
});
