import {Component, OnInit, Input, Inject} from "@angular/core";
import * as THREE from "three";
import {render} from "../../processing/render";
import {TextureViewerService} from "./texture-viewer.service"

@Component({
	selector: "texture-viewer",
	template: require("./texture-viewer.component.html"),
	providers: [TextureViewerService]
})
export class TextureViewerComponent implements OnInit {

	private quad: THREE.Mesh;
	private scene: THREE.Scene;
	private camera: THREE.Camera;
	@Input() texture: THREE.Texture;

	constructor(
		@Inject(TextureViewerService)
		private textureViewerService: TextureViewerService
 	) {}

	ngOnInit() {

		const SIZE = 128;

		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

		render.setSize(SIZE, SIZE);

		// create quad
		let geometry = new THREE.PlaneGeometry( 2, 2);
		//let material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
		let material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: this.texture, side: THREE.DoubleSide} );
		this.quad = new THREE.Mesh( geometry, material );
		//this.quad.position.z = -2;
		this.scene.add(this.quad);

		this.textureViewerService.add(this);
		this.update();
	}

	ngOnDestroy() {
		this.textureViewerService.remove(this);
	}

	update() {
		requestAnimationFrame(() => {
			render.render(this.scene, this.camera);
			this.update();
		});
		
	}

}
