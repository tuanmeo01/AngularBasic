import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../authors.model';

@Component({
  selector: `author-details`,
  template: `
    <div>
      {{ author.firstName }} {{ author.lastName }}
      <button style="margin-left:1rem" (click)="select.emit(author)">
        select
      </button>
      <button style="margin-left:1rem" (click)="delete.emit(author.id)">
        Delete
      </button>
    </div>
  `,
})
export class AuthorDetailComponent {
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
