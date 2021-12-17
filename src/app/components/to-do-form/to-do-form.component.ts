import { Component, OnInit } from '@angular/core';
import { TododataService } from '../../services/tododata.service';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css'],
})
export class ToDoFormComponent implements OnInit {
  toDo: Todo;

  constructor(private tododataService: TododataService) {
    this.toDo = new Todo(null, false, null);
  }

  ngOnInit() {}

  save() {
    this.tododataService.saveToDo(this.toDo);
    this.toDo = new Todo(null, false, null);
  }
}
