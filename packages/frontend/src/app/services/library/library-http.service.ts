import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BookModel} from '../../models/BookModel';
import {HttpHeadersService} from '../headers/http-headers.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryHttpService {
  private url = 'http://localhost:8080/library';

  constructor(
    private http: HttpClient,
    private httpHeadersService: HttpHeadersService,
  ) {
  }

  public getBooks$(page): Observable<Object> {
    return this.http.get(this.url, { params: { page }, observe: 'body' });
  }

  public getBook$(id): Observable<Object> {
    const url = `http://localhost:8080/library/${id}`;
    return this.http.get(url, { observe: 'body' });
  }

  public deleteBook$(id): Observable<Object> {
    const url = `http://localhost:8080/library/${id}`;
    return this.http.delete(url, { responseType: 'text'});
  }

  public editBook$(book: BookModel): Observable<Object> {
    const url = `http://localhost:8080/library/${book.id}`;
    return this.http.put(url, book);
  }

  public createBook$(book: BookModel): Observable<Object> {
    const { headers } = this.httpHeadersService;
    const url = 'http://localhost:8080/library/create';
    return this.http.post(url, book, { headers, observe: 'response' });
  }
}
