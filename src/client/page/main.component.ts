
import {Component} from "@angular/core";

@Component({
	selector: "app-main",
	template: require("./main.component.html")
})
export class MainComponent {

	private header: string = "Hello Angular 2"

	constructor() {

	}
}
