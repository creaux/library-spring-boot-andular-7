import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../services/auth/auth.service';
import {Observable} from 'rxjs/internal/Observable';
import {AuthActions, AuthActionTypes, Failed, Success} from '../actions/auth.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {RouterNavigate} from '../actions/router.actions';
import {Notify} from '../actions/notification.actions';
import {of} from 'rxjs/internal/observable/of';
import {NavigationService} from '../services/navigation/navigation.service';

@Injectable()
export class AuthEffects {

  @Effect() login$: Observable<AuthActions> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    switchMap((action: Failed | Success) => {
      return this.authService.loginPOST$(action.data).pipe(
        map((response) => new Success(response)),
        catchError((response) => of(new Failed(response))),
      );
    }),
  );

  @Effect() loginSuccess$: Observable<RouterNavigate> = this.actions$.pipe(
    ofType(AuthActionTypes.SUCCESS),
    map((action: Success) => {
      const token = action.data.headers.get('Authorization');
      return token;
    }),
    tap((token) => {
      localStorage.setItem('token', token);
      return new RouterNavigate({ path: ['/'] });
    })
  );

  @Effect() loginFailed$: Observable<Notify> = this.actions$.pipe(
    ofType(AuthActionTypes.FAILED),
    map((action: Failed) => new Notify(action.data)),
  );

  @Effect() logout$: Observable<RouterNavigate> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    map(() => new RouterNavigate({ path: ['/login'] }))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
}
