import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable()
export class TododataService {
  todos: Todo[] = [];

  constructor() {
    this.todos.push(new Todo("Fixing PC",false));
    this.todos.push(new Todo("Buy food",true));
    this.todos.push(new Todo("Call Mrs.Sandmicton",false,"2021-12-12"));
   }
   
   saveToDo(todo: Todo) {
     this.todos.push(todo);
   }

   toggleToDo(todo: Todo) {
     todo.done =! todo.done
     
   }
   

}