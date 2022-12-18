import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserReposListComponent } from './github-user-repos-list.component';

describe('GithubUserReposListComponent', () => {
  let component: GithubUserReposListComponent;
  let fixture: ComponentFixture<GithubUserReposListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUserReposListComponent ]
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
