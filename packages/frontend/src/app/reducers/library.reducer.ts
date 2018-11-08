import { Action } from '@ngrx/store';
import {LibraryActionTypes} from '../actions/library.actions';
import {LibraryHttpModel} from '../models/LibraryHttpModel';
import {BookModel} from '../models/BookModel';

const { assign } = Object;

export interface State {
  page?: number;
  payload?: LibraryHttpModel;
  book?: Object;
}

export const initialState: State = {};

export interface LibraryAction extends Action {
  payload?: object;
  page?: number;
}

export interface BookAction extends Action {
  id?: string;
  payload?: BookModel;
}

function book(state = initialState, action: BookAction) {
  switch (action.type) {
    case LibraryActionTypes.LoadBook:
      return assign({}, state, { id: action.id });
    case LibraryActionTypes.UpdateBook:
    case LibraryActionTypes.FulfillBook:
    case LibraryActionTypes.CreateBook:
      return assign({}, state, { payload: action.payload });
    default:
      return state;
  }
}

export function library(state = initialState, action: LibraryAction & BookAction): State {
  switch (action.type) {
    case LibraryActionTypes.FulfillBooks:
      return assign({}, state, { payload: action.payload });
    case LibraryActionTypes.LoadBooks:
      return assign({}, state, { page: action.page });
    case LibraryActionTypes.LoadBook:
    case LibraryActionTypes.UpdateBook:
    case LibraryActionTypes.FulfillBook:
    case LibraryActionTypes.CreateBook:
      return assign({}, state, { book: book(state.book, action) });
    case LibraryActionTypes.DeleteBook:
    default:
      return state;
  }
}
