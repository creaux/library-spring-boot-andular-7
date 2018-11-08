import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SearchHttpService {
  constructor(
    private http: HttpClient,
  ) {}

  search(term) {
    const url = 'http://localhost:8080/library/search';
    return this.http.get(url, { params: { title: term }, observe: 'body' });
  }
}
