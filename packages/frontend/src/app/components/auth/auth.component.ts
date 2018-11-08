import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() public loginForm;
  @Input() public username;
  @Input() public password;
  @Input() public isPasswordValid;
  @Input() public isUsernameValid;

  @Output() public loginEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public login() {
    this.loginEmitter.emit({
      username: this.username,
      password: this.password,
    });
  }

}
