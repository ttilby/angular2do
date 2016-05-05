import { Component, OnInit} from 'angular2/core';
import {TodoListComponent} from './todo-list.component';
import {Todo, TodoService} from './todo.service.ts';

@Component({
    selector: 'todo',
    template: `Todo List:
    <div>
        <input [(ngModel)]="newTodo" (keyup.enter)="addTodo(newTodo)"/>
        <button type="button" (click)="addTodo(newTodo)">+</button>
    </div>
    <todo-list [todos]="todos"(toggleComplete)="toggleComplete($event)"></todo-list>`,
    directives: [TodoListComponent],
    providers: [TodoService]
})
export class TodoComponent implements OnInit {
    
    todos:Todo[];
    newTodo: string;

    constructor(private _todoService:TodoService) {}
    
    ngOnInit() { 
        this._todoService.getTodos()
        .subscribe(todos => this.todos = todos);
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