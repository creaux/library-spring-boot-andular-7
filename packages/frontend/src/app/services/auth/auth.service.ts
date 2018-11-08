import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from '../../app.module';
import { Login, Logout } from '../../actions/auth.actions';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpHeadersService} from '../headers/http-headers.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'http://localhost:8080/login';
  public headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private store: Store<State>,
    private jwtService: JwtHelperService,
    private httpHeadersService: HttpHeadersService
  ) {
    this.headers = this.httpHeadersService.headers;
  }

  public loginPOST$(data) {
    const { headers } = this;
    return this.http.post(this.url, JSON.stringify(data), { headers, observe: 'response' });
  }

  public login$(data) {
    return this.store.dispatch(new Login(data));
  }

  public logout$() {
    return this.store.dispatch(new Logout());
  }

  public isAuthorized(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtService.isTokenExpired(token);
  }
}
