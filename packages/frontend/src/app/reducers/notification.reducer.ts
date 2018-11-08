import {ClearNotification, NotificationActionTypes, Notify} from '../actions/notification.actions';


export interface State {
  statusText?: string;
  message?: string;
  ok?: boolean;
  status?: string;
}

export const initialState: State = null;

export function notification(state = initialState, action: Notify | ClearNotification): State {
  switch (action.type) {
    case NotificationActionTypes.Notify:
      return action.data;
    case NotificationActionTypes.ClearNotification:
      return null;
    default:
      return state;
  }
}
