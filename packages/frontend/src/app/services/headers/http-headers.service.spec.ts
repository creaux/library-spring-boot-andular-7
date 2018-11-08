import { TestBed } from '@angular/core/testing';

import { HttpHeadersService } from './http-headers.service';

describe('HttpHeadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpHeadersService = TestBed.get(HttpHeadersService);
    expect(service).toBeTruthy();
  });
});
