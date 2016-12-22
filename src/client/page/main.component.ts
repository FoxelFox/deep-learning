
import {Component, OnInit, Inject, forwardRef} from "@angular/core"
import {network} from './network.service';
import {textures} from "./texture-viewer.service"
import {render} from "../../processing/render"


@Component({
	selector: "app-main",
	template: "<style>" + require("./main.component.scss") + "</style>" +
	           require("./main.component.html"),
})
export class MainComponent implements OnInit {

	private header: string = "Hello Angular 2"
	private network = network;
	private textures = textures;

	constructor (
	) {
		//render.setClearColor( 0x500000, 0.5 );
		this.update();
	}

	ngOnInit() {
		
	}

	update() {
		requestAnimationFrame(() => {
			this.setRenderSize();

			// render.setClearColor( 0x000000 );

			//render.clear();

			render.setScissorTest(true);
			this.textures.update();
			render.setScissorTest(false);

			this.update();
		});
	}

	setRenderSize() {
		var width = render.domElement.clientWidth;
		var height = render.domElement.clientHeight;

		if ( render.domElement.width !== width || render.domElement.height != height ) {
			render.setSize( width, height, false );
			console.log('resize')
		}
	}
}
