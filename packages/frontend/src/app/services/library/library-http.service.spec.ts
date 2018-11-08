import { TestBed } from '@angular/core/testing';

import { LibraryHttpService } from './library-http.service';

describe('LibraryHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryHttpService = TestBed.get(LibraryHttpService);
    expect(service).toBeTruthy();
  });
});
