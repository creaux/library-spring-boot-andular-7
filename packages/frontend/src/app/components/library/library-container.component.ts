import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../../services/library/library.service';
import {Observable} from 'rxjs/internal/Observable';
import {LibraryEmbedded, Page} from '../../models/LibraryHttpModel';

@Component({
  selector: 'app-library-container',
  template: `
    <app-library
      [books]="books$"
      (deleteEmitter)="deleteBook($event)"
    ></app-library>
    <app-pagination
      [page$]="page$"
      (goToPage)="goToPage($event)"
    ></app-pagination>
  `,
})
export class LibraryContainerComponent implements OnInit {

  constructor(
    private libraryService: LibraryService,
  ) {}

  ngOnInit() {
    this.libraryService.loadBooks();
  }

  public get books$(): Observable<LibraryEmbedded> {
    return this.libraryService.books$;
  }

  public get page$(): Observable<Page> {
    return this.libraryService.page$;
  }

  public goToPage(page: number) {
    this.libraryService.loadBooks(page);
  }

  public deleteBook(id) {
    this.libraryService.deleteBook(id);
  }
}
