import {Component, Input, OnInit} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth-container',
  template: `
    <app-auth
      [username]="username"
      [isUsernameValid]="isUsernameValid"
      [password]="password"
      [isPasswordValid]="isPasswordValid"
      [loginForm]="loginForm"
      (loginEmitter)="login($event)"
    ></app-auth>
  `,
})
export class AuthContainerComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public get username() {
    return this.loginForm.get('username');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  public get isUsernameValid() {
    return !this.username.hasError('username');
  }

  public get isPasswordValid() {
    return !this.password.hasError('password');
  }

  public login({ username, password }) {
    this.service.login$({ username: username.value, password: password.value });
  }
}
