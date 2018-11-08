import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {RouterNavigate} from '../../actions/router.actions';
import {NavigationExtras} from '@angular/router';
import {State} from '../../app.module';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  constructor(
    private store: Store<State>,
  ) {}

  navigate(path: any[], queryParams?: object, extras?: NavigationExtras) {
    return this.store.dispatch(new RouterNavigate({ path, queryParams, extras }));
  }
}
