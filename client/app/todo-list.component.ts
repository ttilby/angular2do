import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {Todo} from './todo.service';

@Component({
    selector: 'todo-list',
    template: `<div class="todo-list">
    <ul>
        <li *ngFor="let todo of todos; let i = index">
            <input type="checkbox" id="{{i}}" (click)="toggle(i)" />
            <label [attr.for]="i" [style.text-decoration]="!todo.completed ? 'none': 'line-through'">
            {{todo.title}}
            </label>
        </li>
    </ul>
</div>`,
})
export class TodoListComponent {

    @Input() todos:Todo[];
    @Output() toggleComplete = new EventEmitter<number>();

    toggle(index:number) {
        this.toggleComplete.emit(index);
    }

}