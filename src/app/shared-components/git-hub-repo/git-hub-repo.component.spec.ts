import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubRepoComponent } from './git-hub-repo.component';

fdescribe('GitHubRepoComponent', () => {
  let component: GitHubRepoComponent;
  let fixture: ComponentFixture<GitHubRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHubRepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitHubRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
