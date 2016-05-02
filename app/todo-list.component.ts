import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {Todo} from './todo';

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo-list.component.html',
})
export class TodoListComponent {

    @Input() todos: Array<Todo>;
    @Output() completeTodo = new EventEmitter<number>();


    complete(index:boolean){
        this.completeTodo.emit(index);
    }

    constructor(){

    }



}