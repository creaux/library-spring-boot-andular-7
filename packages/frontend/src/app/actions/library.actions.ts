import { Action } from '@ngrx/store';
import {BookModel} from '../models/BookModel';

export enum LibraryActionTypes {
  LoadBooks = '[Library] Load Books',
  FulfillBooks = '[Library] Fulfill Books',
  LoadBook = '[Library] Load Book',
  FulfillBook = '[Library] Fulfill Book',
  DeleteBook = '[Library] Delete Book',
  UpdateBook = '[Library] Update Book',
  CreateBook = '[Library] Create Book',
}

export class LoadBooks implements Action {
  readonly type = LibraryActionTypes.LoadBooks;

  constructor(
    public page: number = 0,
  ) {}
}

export class LoadBook implements Action {
  readonly type = LibraryActionTypes.LoadBook;

  constructor(
    public id: string,
  ) {}
}

export class FulfillBook implements Action {
  readonly type = LibraryActionTypes.FulfillBook;

  constructor(
    public payload,
  ) {}
}

export class FulfillBooks implements Action {
  readonly type = LibraryActionTypes.FulfillBooks;

  constructor(
    public payload: object,
  ) {}
}

export class DeleteBook implements Action {
  readonly type = LibraryActionTypes.DeleteBook;

  constructor(
    public id: number,
  ) {}
}

export class UpdateBook implements Action {
  readonly type = LibraryActionTypes.UpdateBook;

  constructor(
    public payload: BookModel,
  ) {}
}

export class CreateBook implements Action {
  readonly type = LibraryActionTypes.CreateBook;

  constructor(
    public payload,
  ) {}
}
export type LibraryActions = LoadBooks | FulfillBooks;
