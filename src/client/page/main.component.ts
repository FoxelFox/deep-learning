
import {Component} from "@angular/core"
import {NetworkService} from './network.service';
import { Inject } from "@angular/core";

@Component({
	selector: "app-main",
	template: "<style>" + require("./main.component.scss") + "</style>" +
	           require("./main.component.html"),
	providers: [NetworkService]
})
export class MainComponent {

	private header: string = "Hello Angular 2"

	constructor (
		@Inject(NetworkService)
		private networkservice: NetworkService
	) {

	}
}
