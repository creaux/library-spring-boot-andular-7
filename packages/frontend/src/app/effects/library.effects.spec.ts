import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LibraryEffects } from './library.effects';

describe('LibraryEffects', () => {
  let actions$: Observable<any>;
  let effects: LibraryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LibraryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LibraryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
