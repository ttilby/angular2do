import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

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

    constructor(private http: Http) {
        this.items = [];
    }

    getTodos(): Observable<Todo> {
        return this.http.get('./app/todo/todos.json')
        .map((res: Response) => res.json());
    }

    addTodo(item: string):Todo[] {
        if (item) {
            this.items.push(new Todo(item));
        }
        return this.items;
    }

    toggleComplete(index: number):Todo[] {
        this.items[index].completed = this.items[index].completed ? null : new Date();
        return this.items;
    }

}