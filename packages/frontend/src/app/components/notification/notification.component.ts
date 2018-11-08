import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {Observable} from 'rxjs/internal/Observable';
import {State} from '../../app.module';
import {State as NotificationState} from '../../reducers/notification.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  static TIMEOUT$ = 3600;
  notification$: Observable<NotificationState>;

  constructor(private store: Store<State>) {
    this.notification$ = this.store.pipe(select('notification'));
  }

  public get notification(): Observable<string> {
    return this.notification$
      .pipe(map(data => data ? `${data.statusText}: ${data.message}` : null));
  }
}
