import { Action } from '@ngrx/store';

export enum NotificationActionTypes {
  Notify = '[Notification] Notify',
  ClearNotification = '[Notification] Clean Notification'
}

export class Notify implements Action {
  readonly type = NotificationActionTypes.Notify;
  constructor(
    public data: object
  ) { }
}

export class ClearNotification implements Action {
  readonly type = NotificationActionTypes.ClearNotification;
}

export type NotificationActions = Notify;
