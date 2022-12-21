import { TestBed } from '@angular/core/testing';

import { GituhubHttpService } from './gituhub-http.service';

fdescribe('GituhubHttpService', () => {
  let service: GituhubHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GituhubHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
