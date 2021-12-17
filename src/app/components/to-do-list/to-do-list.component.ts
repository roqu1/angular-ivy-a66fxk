import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TododataService } from '../../services/tododata.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  
  
  constructor(private tododataService: TododataService) {}

  get toDos() {
    return this.tododataService.todos;
  }

  toggle(todo: Todo) {
    return this.tododataService.toggleToDo
  }

  ngOnInit() {}
}
