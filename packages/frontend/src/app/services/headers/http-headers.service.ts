import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHeadersService {
  public headers: HttpHeaders;

  constructor() {
    this.headers = new HttpHeaders();
    // this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Data-Type', 'json');
  }
}
