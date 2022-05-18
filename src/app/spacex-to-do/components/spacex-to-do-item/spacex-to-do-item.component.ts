import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoItem} from "../../models/to-do-item";

@Component({
  selector: 'app-spacex-to-do-item',
  templateUrl: './spacex-to-do-item.component.html',
  styleUrls: ['./spacex-to-do-item.component.css']
})
export class SpacexToDoItemComponent {

  @Input() item: ToDoItem | undefined;

  @Output() onDoneClick = new EventEmitter<number>();
  @Output() onNotDoneClick = new EventEmitter<number>();
  @Output() onDeleteClick = new EventEmitter<number>();

  doneClick = () => this.onDoneClick.emit(this.item?.id);
  notDoneClick = () => this.onNotDoneClick.emit(this.item?.id);
  deleteClick = () => this.onDeleteClick.emit(this.item?.id);

}
