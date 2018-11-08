import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Search, SearchActionTypes} from '../actions/search.actions';
import {SearchHttpService} from '../services/search/search-http.service';
import {FulfillBooks} from '../actions/library.actions';
import {Notify} from '../actions/notification.actions';
import {of} from 'rxjs/internal/observable/of';
import {LibraryHttpModel} from '../models/LibraryHttpModel';
import {LibraryModel} from '../models/LibraryModel';

@Injectable()
export class SearchEffects {
  @Effect()
  search$ = this.actions$.pipe(
    ofType(SearchActionTypes.Search),
    switchMap<Search, FulfillBooks | Notify>((data: Search) => this.searchHttpService.search(data.payload).pipe(
      map((payload: LibraryModel) => {
        return new FulfillBooks(new LibraryHttpModel({ library: payload }))
      }),
      catchError(() => of(new Notify({ statusText: 'FAILED', message: 'Book doesn\'t exists.' })))
    )),
  );

  constructor(
    private actions$: Actions,
    private searchHttpService: SearchHttpService,
  ) {}
}
