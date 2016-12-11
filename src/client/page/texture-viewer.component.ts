import {Component, OnInit, Input} from "@angular/core";
import * as THREE from "three";

@Component({
	selector: "texture-viewer",
	template: require("./texture-viewer.component.html")
})
export class TextureViewerComponent implements OnInit {

	private quad: THREE.Mesh;
	private scene: THREE.Scene;
	private render: THREE.WebGLRenderer;
	private camera: THREE.Camera;
	@Input() texture: THREE.Texture;

	constructor() {
		console.log(require("./basic.fs"));
	}

	ngOnInit() {
		const SIZE = 128;

		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1000);

		let render = new THREE.WebGLRenderer({
			canvas: <any>document.getElementById("texture")
		});
		render.setSize(SIZE, SIZE);

		// create quad
		let geometry = new THREE.PlaneGeometry( 2, 2);
		let material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
		this.quad = new THREE.Mesh( geometry, material );
		//this.quad.position.z = -2;
		this.scene.add(this.quad);

	}

	update() {
		requestAnimationFrame(() => {
			this.render.render(this.scene, this.camera);
		});
	}

}
