import { TestBed } from '@angular/core/testing';

import { GituhubHttpService } from './gituhub-http.service';

describe('GituhubHttpService', () => {
  let service: GituhubHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GituhubHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
