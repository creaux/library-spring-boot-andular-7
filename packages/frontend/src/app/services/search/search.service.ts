import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Search} from '../../actions/search.actions';
import {Store} from '@ngrx/store';
import {State} from '../../app.module';

@Injectable({ providedIn: 'root' })
export class SearchService {

  constructor(
    private store: Store<State>,
  ) {}

  search(term) {
    this.store.dispatch(new Search(term));
  }
}
