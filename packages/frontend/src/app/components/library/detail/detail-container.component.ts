import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {LibraryService} from '../../../services/library/library.service';
import {Observable} from 'rxjs/internal/Observable';
import {BookModel} from '../../../models/BookModel';

@Component({
  selector: 'app-detail-container',
  template: `
    <app-detail
      [book$]="book$"
    ></app-detail>
  `,
})
export class DetailContainerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private libraryService: LibraryService,
  ) {}

  ngOnInit() {
    this.libraryService.loadBook(this.route.snapshot.params.id);
  }

  public get book$(): Observable<BookModel> {
    return this.libraryService.book$;
  }
}
