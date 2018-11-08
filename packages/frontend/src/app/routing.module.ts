import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {AuthContainerComponent} from './components/auth/auth-container.component';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginGuard} from './guards/login.guard';
import {EffectsModule} from '@ngrx/effects';
import {RouterEffects} from './effects/router.effects';
import {StoreModule} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import {ModuleComponent} from './components/module/module.component';
import {LibraryContainerComponent} from './components/library/library-container.component';
import {DetailContainerComponent} from './components/library/detail/detail-container.component';
import {EditContainerComponent} from './components/library/edit/edit-container.component';
import {AddContainerComponent} from './components/library/edit/add-container.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Dashboard',
      title: 'Dashboard'
    },
    children: [
      {
        path: '',
        component: ModuleComponent,
        data: {
          breadcrumb: 'Modules',
          title: 'Modules',
        }
      },
      {
        path: 'library',
        component: LibraryContainerComponent,
        data: {
          breadcrumb: 'Library',
          title: 'Library',
        },
      },
      {
        path: 'library/add',
        component: AddContainerComponent,
        data: {
          breadcrumb: 'Edit Book',
          title: 'Edit Book',
        },
      },
      {
        path: 'library/edit/:id',
        component: EditContainerComponent,
        data: {
          breadcrumb: 'Edit Book',
          title: 'Edit Book',
        },
      },
      {
        path: 'library/view/:id',
        component: DetailContainerComponent,
        data: {
          breadcrumb: 'Book',
          title: 'Book',
        },
      },
    ],
  },
  {
    path: 'login',
    component: AuthContainerComponent,
    canActivate: [LoginGuard],
    data: {
      breadcrumb: 'Login',
      title: 'Login',
    },
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forFeature('routing', { router: routerReducer }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forFeature([RouterEffects]),
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
