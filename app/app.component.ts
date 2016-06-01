import { Component } from 'angular2/core';
import {DB} from './db.component';

@Component({
	selector: 'app',
	templateUrl: 'views/index.html'
})

export class AppComponent {
	title: string = "Seu primeiro aplicativo Angular 2";
	name: string = "Jayr";
	db: DB = new DB();
}