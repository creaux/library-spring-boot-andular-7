import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {select, Store} from '@ngrx/store';
import {LoadBooks, LoadBook, DeleteBook, UpdateBook, CreateBook} from '../../actions/library.actions';
import {State} from '../../app.module';
import {LibraryEmbedded, LibraryHttpModel, Page} from '../../models/LibraryHttpModel';
import {filter, map} from 'rxjs/operators';
import {BookModel} from '../../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  constructor(
    private store: Store<State>,
  ) {}

  public loadBooks(page = 0): void {
    this.store.dispatch(new LoadBooks(page));
  }

  public loadBook(id): void {
    this.store.dispatch(new LoadBook(id));
  }

  public deleteBook(id): void {
    this.store.dispatch(new DeleteBook(id));
  }

  public updateBook(book: BookModel): void {
    this.store.dispatch(new UpdateBook(book));
  }

  public createBook(book: BookModel): void {
    this.store.dispatch(new CreateBook(book));
  }

  private get booksPayload(): Observable<LibraryHttpModel> {
    return this.store.pipe(
      filter<{ library: { payload: LibraryHttpModel } }>((state) => !!(state.library && state.library.payload)),
      select<{ library: { payload: LibraryHttpModel } }>((state) => state.library.payload),
    );
  }

  private get bookPayload$() {
    return this.store.pipe(
      filter<{ library: { book: { payload: BookModel } }}>((state) => !!(state.library && state.library.book.payload)),
      select<{ library: { book: { payload: BookModel } }}>((state) => state.library.book.payload),
    );
  }

  public get book$() {
    return this.bookPayload$;
  }

  public get books$(): Observable<LibraryEmbedded> {
    return this.booksPayload.pipe(
      select<LibraryHttpModel>((payload) => payload._embedded.library)
    );
  }

  public get page$(): Observable<Page> {
    return this.booksPayload.pipe(
      select<LibraryHttpModel>((payload) => payload.page)
    );
  }
}
