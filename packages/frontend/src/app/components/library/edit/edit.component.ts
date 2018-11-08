import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Output() public bookEmitter: EventEmitter<FormGroup> = new EventEmitter();
  @Input() public editForm: FormGroup;
  @Output() public addAuthorEmitter: EventEmitter<FormGroup> = new EventEmitter();

  public submit(): void {
    this.bookEmitter.emit(this.editForm.value);
  }

  public get title() {
    return this.editForm.get('title');
  }

  public get description() {
    return this.editForm.get('description');
  }

  public addAuthor() {
    return this.addAuthorEmitter.emit();
  }
}
