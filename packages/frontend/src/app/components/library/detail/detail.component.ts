import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from '../../../models/BookModel';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() public book$: Observable<BookModel>;
}
