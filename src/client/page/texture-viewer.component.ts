import {Component, OnInit} from "@angular/core";
import * as THREE from "three";

@Component({
	selector: "texture-viewer",
	template: require("./texture-viewer.component.html")
})
export class TextureViewerComponent implements OnInit {
	constructor() {


	}

	ngOnInit() {
		const SIZE = 128;

		let scene = new THREE.Scene();
		let camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1000);

		let render = new THREE.WebGLRenderer({
			canvas: <any>document.getElementById("texture")
		});
		render.setSize(SIZE, SIZE);
	}

}
