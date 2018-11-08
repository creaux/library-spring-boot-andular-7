import { TestBed } from '@angular/core/testing';

import { SearchHttpService } from './search-http.service';

describe('SearchHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchHttpService = TestBed.get(SearchHttpService);
    expect(service).toBeTruthy();
  });
});
