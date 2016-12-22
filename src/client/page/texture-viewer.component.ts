import {Component, OnInit, Input, Inject, OnDestroy} from "@angular/core";
import * as THREE from "three";
import {render} from "../../processing/render";
import {textures} from "./texture-viewer.service"

@Component({
	selector: "texture-viewer",
	template: require("./texture-viewer.component.html"),
})
export class TextureViewerComponent implements OnInit , OnDestroy{

	private quad: THREE.Mesh;
	private scene: THREE.Scene;
	private camera: THREE.Camera;
	private element: HTMLElement;
	private textures = textures;
	@Input() texture: THREE.Texture;

	ngOnInit() {

		const SIZE = 128;

		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

		//render.setSize(SIZE, SIZE);

		// create quad
		let geometry = new THREE.PlaneGeometry( 2, 2);
		// let material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
		let material = new THREE.MeshBasicMaterial( { transparent: true, map: this.texture, side: THREE.DoubleSide} );
		//let material = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide} );
		this.quad = new THREE.Mesh( geometry, material );
		//this.quad.position.z = -2;
		this.scene.add(this.quad);

		

		
		this.textures.add(this);
	}

	ngOnDestroy() {
		this.textures.remove(this);
	}

	update() {
		this.element = document.getElementById("texture" + this.texture.id);
		const rect = this.element.getBoundingClientRect();

		if ( 
			rect.bottom < 0 || rect.top  > render.domElement.clientHeight ||
		    rect.right  < 0 || rect.left > render.domElement.clientWidth 
		) {
			return;  // it's off screen
		}

		// set the viewport
		var width  = rect.right - rect.left;
		var height = rect.bottom - rect.top;
		var left   = rect.left;
		var bottom = render.domElement.clientHeight - rect.bottom;

		render.setViewport( left, bottom, width, height );
		render.setScissor( left, bottom, width, height );

		render.render(this.scene, this.camera);
	}

}
