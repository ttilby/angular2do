import {Component} from 'angular2/core';
import {TodoListComponent} from './todo-list.component';
import {Todo, TodoService} from './todo.service.ts';

@Component({
    selector: 'my-app',
    template: `
    <div>
      Todo List:
      <div>
        <input [(ngModel)]="newTodo" (keyup.enter)="addTodo(newTodo)"/>
        <button type="button" (click)="addTodo(newTodo)">+</button>
      </div>
      <todo-list [todos]="todos" (toggleComplete)="toggleComplete($event)"></todo-list>
    </div>
  `,
    directives: [TodoListComponent],
    providers: [TodoService]
})
export class AppComponent {

    _todoService:TodoService;
    todos:Todo[];
    newTodo;

    constructor(private _todoService:TodoService) {
        this.todos = _todoService.getTodos();
    }

    addTodo(newTodo:string) {
        if (newTodo) {
            this.todos = this._todoService.addTodo(newTodo);
            this.clearTodo();
        }
    }

    toggleComplete(index:number) {
        this.todos = this._todoService.toggleComplete(index);
    }

    clearTodo() {
        this.newTodo = '';
    }

}