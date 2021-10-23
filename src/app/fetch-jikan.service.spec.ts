import { TestBed } from '@angular/core/testing';

import { FetchJikanService } from './fetch-jikan.service';

describe('FetchJikanService', () => {
  let service: FetchJikanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchJikanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
