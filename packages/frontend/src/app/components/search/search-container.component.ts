import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchService} from '../../services/search/search.service';

@Component({
  selector: 'app-search-container',
  template: `
    <app-search
      (searchEmitter)="search($event)"
    ></app-search>
  `,
})
export class SearchContainerComponent {
  constructor(
    private searchService: SearchService,
  ) {}

  public search(term) {
    this.searchService.search(term);
  }
}
