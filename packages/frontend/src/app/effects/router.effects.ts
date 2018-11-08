import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {RouteChanged, RouterActionTypes, RouterNavigate} from '../actions/router.actions';
import {distinctUntilChanged, filter, map, switchMap, tap} from 'rxjs/operators';
import {
  ActivatedRoute,
  ActivationEnd,
  Router,
} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../app.module';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActionTypes.RouterNavigate),
    map((action: RouterNavigate) => action.payload),
    tap(({ path, queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras })),
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>,
  ) {}
}
