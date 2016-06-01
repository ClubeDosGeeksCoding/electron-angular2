import { Component } from 'angular2/core';

@Component({
	selector: 'aplicativo',
	templateUrl: 'views/index.html'
})

export class AppComponent {
	title: string = "Seu primeiro aplicativo Angular 2";
	name: string = "Jayr";
}