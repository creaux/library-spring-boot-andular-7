import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {Observer} from 'rxjs/internal/types';
import {empty} from 'rxjs/internal/Observer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInput: FormControl = new FormControl();
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.searchInput.valueChanges.pipe(debounceTime(500)).subscribe(
      (text: string) => { this.searchEmitter.emit(text); });
  }
}
