import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../../../services/library/library.service';
import {ActivatedRoute} from '@angular/router';
import {BookModel} from '../../../models/BookModel';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-container',
  template: `
    <app-edit
      (bookEmitter)="createBook($event)"
      (addAuthorEmitter)="addAuthor()"
      [editForm]="addForm"
    ></app-edit>
  `,
})
export class AddContainerComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private libraryService: LibraryService,
  ) {}

  ngOnInit() {
    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      published: new FormControl('', Validators.required),
      authors: new FormArray([], Validators.required),
    });
  }

  createBook(book: BookModel) {
    this.libraryService.createBook(book);
  }

  addAuthor() {
    (<FormArray>this.addForm.get('authors')).push(new FormControl(''));
  }
}
