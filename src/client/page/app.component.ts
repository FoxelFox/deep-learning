import {Component} from "@angular/core";

@Component({
	selector: "app-main",
	template: "<h1>{{header}}</h1>"
})
export class AppComponent {

	private header: string = "Hello Angular 2"

	constructor() {

	}
}
