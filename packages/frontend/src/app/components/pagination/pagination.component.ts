import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from '../../models/LibraryHttpModel';
import {Observable} from 'rxjs/internal/Observable';
import {select} from '@ngrx/store';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Output() goToPage = new EventEmitter();
  @Input() page$: Observable<Page>;

  private _current: number;
  private _totalPages: number;

  ngOnInit() {
    this.setCurrent();
    this.setTotalPages();
  }

  public set emitPage(page: number) {
    this.goToPage.emit(page);
  }

  private get current$() {
    return this.page$.pipe(select('number'));
  }

  public setCurrent() {
    return this.current$.subscribe((current) => { this._current = current; });
  }

  public setTotalPages() {
    return this.totalPages$.subscribe((totalPages) => { this._totalPages = totalPages; });
  }

  public get totalPages() {
    return this._totalPages;
  }

  public get current() {
    return this._current;
  }

  public get totalPages$() {
    return this.page$.pipe(select('totalPages'));
  }
}
