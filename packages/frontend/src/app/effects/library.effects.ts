import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CreateBook, DeleteBook, FulfillBook, FulfillBooks, LibraryActionTypes, LoadBook, LoadBooks} from '../actions/library.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {LibraryHttpService} from '../services/library/library-http.service';
import {LibraryHttpModel} from '../models/LibraryHttpModel';
import {LibraryService} from '../services/library/library.service';
import {BookAction} from '../reducers/library.reducer';
import {Notify} from '../actions/notification.actions';
import {of} from 'rxjs/internal/observable/of';


@Injectable()
export class LibraryEffects {
  @Effect()
  loadBooks$: Observable<FulfillBooks | Notify> = this.actions$.pipe(
    ofType(LibraryActionTypes.LoadBooks),
    switchMap<LoadBooks, FulfillBooks | Notify>(({ page: pageNumber }) => {
      return this.libraryHttpService.getBooks$(pageNumber).pipe(
        map<LibraryHttpModel, FulfillBooks>(({ _embedded, _links, page }) => {
          return new FulfillBooks(new LibraryHttpModel(_embedded, _links, page));
        }),
        catchError(() => of(new Notify({ statusText: 'FAILED', message: 'Books not loaded.' }))),
      );
    })
  );

  @Effect()
  loadBook$: Observable<FulfillBook | Notify> = this.actions$.pipe(
    ofType(LibraryActionTypes.LoadBook),
    switchMap<LoadBook, FulfillBook | Notify>(({ id: bookId }) => {
      return this.libraryHttpService.getBook$(bookId).pipe(
        map<LibraryHttpModel, FulfillBook>((book) => {
          return new FulfillBook(book);
        }),
        catchError(() => of(new Notify({ statusText: 'FAILED', message: 'Book not loaded.' }))),
      );
    })
  );

  @Effect()
  deleteBook$ = this.actions$.pipe(
    ofType(LibraryActionTypes.DeleteBook),
    switchMap<DeleteBook, Notify>(({ id: bookId }) => {
      return this.libraryHttpService.deleteBook$(bookId).pipe(
        map(() => {
          this.libraryService.loadBooks();
          return new Notify({ statusText: 'OK', message: 'Book successfully deleted.'});
        }),
        catchError(() => of(new Notify({ statusText: 'FAILED', message: 'Book hasn\'t been deleted.' })))
      );
    }),
  );

  @Effect()
  updateBook$ = this.actions$.pipe(
    ofType(LibraryActionTypes.UpdateBook),
    switchMap<BookAction, Notify>((book) => {
      return this.libraryHttpService.editBook$(book.payload).pipe(
        map(() => new Notify({ statusText: 'OK', message: 'Book successfully updated.'})),
        catchError(() => of(new Notify({ statusText: 'FAILED', message: 'Book hasn\'t been updated.' })))
      );
    })
  );

  @Effect()
  createBook$ = this.actions$.pipe(
    ofType<CreateBook>(LibraryActionTypes.CreateBook),
    switchMap(({ payload }) => {
      return this.libraryHttpService.createBook$(payload).pipe(
        map(() => new Notify({ statusText: 'OK', message: 'Book successfully saved.'})),
        catchError(() => of(new Notify({ statusText: 'FAILED', message: 'Book hasn\'t been updated.' })))
      );
    })
  );

  constructor(
    private actions$: Actions<LoadBooks>,
    private libraryHttpService: LibraryHttpService,
    private libraryService: LibraryService,
  ) {}
}
