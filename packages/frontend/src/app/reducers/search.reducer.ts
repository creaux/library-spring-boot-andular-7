import { Action } from '@ngrx/store';
import {SearchActionTypes} from '../actions/search.actions';


export interface State {}

export const initialState: State = {

};

export interface SearchAction extends Action {
  payload: string;
}

export function search(state = initialState, action: SearchAction): State {
  switch (action.type) {
    case SearchActionTypes.Search:
      return action.payload;
    default:
      return state;
  }
}
