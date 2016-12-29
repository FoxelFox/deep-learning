import * as THREE from "three";
import {render} from "./render";

export class RenderPass {
	private shader: THREE.ShaderMaterial;
	private scene: THREE.Scene;
	private camera: THREE.Camera;
	private targets: THREE.WebGLRenderTarget[];
	private quad: THREE.Object3D;
  	private targetIndex: number = 0;

	constructor(width: number, height: number) {
		this.targets = [
			new THREE.WebGLRenderTarget(width, height),
			new THREE.WebGLRenderTarget(width, height)
		];

		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
		this.scene = new THREE.Scene();

		// create quad
		let geometry = new THREE.PlaneGeometry( 2, 2);
		this.shader = new THREE.ShaderMaterial({
			uniforms: {
				map: { value: this.targets[1].texture }
			},
			vertexShader: require("./shader/basic.vertex.glsl"),
			fragmentShader: require("./shader/basic.fragment.glsl")
		});

		this.quad = new THREE.Mesh( geometry, this.shader );

		this.scene.add(this.quad);

	}

	public process() {
		render.render(this.scene, this.camera, this.targets[this.targetIndex]);

		// swap targets
		this.shader.uniforms["map"].value = this.targets[this.targetIndex].texture;
		this.targetIndex = this.targetIndex ? 0 : 1;

	}

	public processOnCanvas() {
		requestAnimationFrame(() => {
			render.render(this.scene, this.camera);
		});
	}

	get Output(): THREE.Texture {
		return this.targets[0].texture;
	}
}
