import {Component, OnInit} from '@angular/core';
import {ToDoItem} from "../../models/to-do-item";
import {ToDoListMock} from "../../mocks/to-do-list-mock";

@Component({
  selector: 'app-spacex-to-do-list',
  templateUrl: './spacex-to-do-list.component.html',
  styleUrls: ['./spacex-to-do-list.component.css']
})
export class SpacexToDoListComponent implements OnInit {

  list: ToDoItem[] = [];
  counterId: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.list = ToDoListMock;
  }

  addToDoItem = (label: string) => this.list.push({
    description: "",
    label,
    isActive: false,
    id: this.addCounterToItem()
  })

  addCounterToItem = () => {
    this.counterId = this.counterId + 1;
    return this.counterId;
  }

  // onItemDone = (id: number) => this.list = this.list.map(item => item.id === id ? {...item, isDone: true} : item);
  onItemDone = (id: number) => this.list[this.list.findIndex(item => item.id === id)].isActive = true;
  onItemNotDone = (id: number) => this.list[this.list.findIndex(item => item.id === id)].isActive = false;
  onItemDelete = (id: number) => {
    this.list = this.list.filter(item => item.id !== id);
    // this.list = this.list.map((item, index) => ({...item, id: index}));
  }

}
