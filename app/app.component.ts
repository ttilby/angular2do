import {Component} from 'angular2/core';
import {TodoListComponent} from './todo-list.component';
import {Todo} from './todo';

@Component({
    selector: 'my-app',
    template: `
    <div>
      Todo List:
      <div>
        <input [(ngModel)]="newTodo" (keyup.enter)="addTodo(newTodo)"/>
        <button type="button" (click)="addTodo(newTodo)">+</button>
      </div>
      <todo-list [todos]="todos" (completeTodo)="completeTodo($event)"></todo-list>
    </div>
  `,
    directives[TodoListComponent]
})
export class AppComponent {

    newTodo;

    todos = [{
        title: 'write a simple angular 2 todo app',
        createdDate: new Date(),
        completedDate: null
    }];

    addTodo(newTodo:Todo) {
        if (newTodo) {
            this.todos.push({
                title: newTodo.toString(),
                createdDate: new Date(),
                completedDate: null
            });
            this.clearTodo();
        }
    }

    clearTodo() {
        this.newTodo = '';
    }

    completeTodo($event) {
        this.todos[$event].completedDate = new Date();
    }

}