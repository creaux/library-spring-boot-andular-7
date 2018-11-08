import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookModel} from '../../models/BookModel';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  @Input() public books: Array<BookModel>;
  @Output() public deleteEmitter = new EventEmitter();
  @Output() public editEmitter = new EventEmitter();

  public delete(id) {
    this.deleteEmitter.emit(id);
  }

  public edit(id) {
    this.editEmitter.emit(id);
  }
}
