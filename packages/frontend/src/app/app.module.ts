import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import {AuthContainerComponent} from './components/auth/auth-container.component';
import { JwtModule } from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth/auth.service';
import { auth } from './reducers/auth.reducer';
import { notification } from './reducers/notification.reducer';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './effects/auth.effects';
import { NotificationComponent } from './components/notification/notification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LibraryComponent } from './components/library/library.component';
import { ModuleComponent } from './components/module/module.component';
import { library } from './reducers/library.reducer';
import {LibraryEffects} from './effects/library.effects';
import { LibraryContainerComponent } from './components/library/library-container.component';
import {LibraryHttpService} from './services/library/library-http.service';
import {LibraryService} from './services/library/library.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SetPipe } from './pipes/set.pipe';
import { DetailComponent } from './components/library/detail/detail.component';
import { DetailContainerComponent } from './components/library/detail/detail-container.component';
import { EditComponent } from './components/library/edit/edit.component';
import { EditContainerComponent } from './components/library/edit/edit-container.component';
import {BreadcrumbsModule} from 'ng6-breadcrumbs';
import { AddContainerComponent } from './components/library/edit/add-container.component';
import { SearchComponent } from './components/search/search.component';
import { SearchContainerComponent } from './components/search/search-container.component';
import {search} from './reducers/search.reducer';
import {SearchEffects} from './effects/search.effects';

export interface State {
  auth?;
  notification?;
  routing?;
  library: object;
}

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthContainerComponent,
    NotificationComponent,
    DashboardComponent,
    LibraryComponent,
    ModuleComponent,
    LibraryContainerComponent,
    PaginationComponent,
    SetPipe,
    DetailComponent,
    DetailContainerComponent,
    EditComponent,
    EditContainerComponent,
    AddContainerComponent,
    SearchComponent,
    SearchContainerComponent,
  ],
  imports: [
    StoreModule.forRoot({ auth, notification, library, search }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BreadcrumbsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['localhost:8080/login']
      }
    }),
    EffectsModule.forRoot([AuthEffects, LibraryEffects, SearchEffects]),
    RoutingModule,
  ],
  providers: [AuthService, LibraryService, LibraryHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
