import {Injectable} from 'angular2/core';

export class Todo {

    title: string;
    created: Date;
    completed: Date;

    constructor(title: string) {
        this.title = title;
        this.created = new Date();
    }

}


@Injectable()
export class TodoService {

    items: Todo[];

    constructor() {
        this.items = [
            new Todo('write an angular app')
        ];
    }

    getTodos() {
        return this.items;
    }

    addTodo(item: string) {
        if (item) {
            this.items.push(new Todo(item));
        }
        return this.items;
    }

    toggleComplete(index) {
        this.items[index].completed = this.items[index].completed ? null : new Date();
        return this.items;
    }

}