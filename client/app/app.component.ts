import {Component, OnInit} from 'angular2/core';
import {TodoComponent} from './todo/todo.component.ts';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <todo></todo>
    </div>`,
    directives: [TodoComponent],
    providers: []
})
export class AppComponent implements OnInit{

    constructor(){}

    ngOnInit(){
        
    }

}