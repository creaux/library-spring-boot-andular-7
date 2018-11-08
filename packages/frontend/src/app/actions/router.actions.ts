import { Action } from '@ngrx/store';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationExtras} from '@angular/router';

export enum RouterActionTypes {
  RouterNavigate = '[Router] Navigate',
  RouteChanged = '[Router] Changed',
}

export class RouterNavigate implements Action {
  readonly type = RouterActionTypes.RouterNavigate;

  constructor(
    public payload: {
      path: any[];
      queryParams?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class RouteChanged implements Action {
  readonly type = RouterActionTypes.RouteChanged;
}

export type RouterAction = RouterNavigate | RouteChanged;
