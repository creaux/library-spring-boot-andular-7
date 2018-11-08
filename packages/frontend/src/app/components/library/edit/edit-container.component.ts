import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../../../services/library/library.service';
import {ActivatedRoute} from '@angular/router';
import {BookModel} from '../../../models/BookModel';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-edit-container',
  template: `
    <app-edit
      (bookEmitter)="updateBook($event)"
      [editForm]="editForm"
    ></app-edit>
  `,
})
export class EditContainerComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private libraryService: LibraryService,
  ) {}

  ngOnInit() {
    this.libraryService.loadBook(this.route.snapshot.params.id);
    this.fulfillForm();
  }

  updateBook(book) {
    this.libraryService.updateBook(book);
  }

  public fulfillForm(): void {
    this.libraryService.book$.subscribe(
      (book: BookModel) => {
        const date = new Date(book.published);
        const published = formatDate(date, 'yyyy-MM-ddThh:mm', 'en_GB.UTF-8');
        const authorFormControls = book.authors.map((author) => new FormControl(author));
        this.editForm = new FormGroup({
          id: new FormControl(book.id),
          title: new FormControl(book.title, Validators.required),
          description: new FormControl(book.description, Validators.required),
          published: new FormControl(published, Validators.required),
          authors: new FormArray(authorFormControls),
        });
      }
    );
  }
}
