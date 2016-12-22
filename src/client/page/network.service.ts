import {Injectable} from "@angular/core"
import {Network} from "../../net/network";
import {render} from "../../processing/render";

//@Injectable()
export class NetworkService {

	private net: Network;

	constructor() {
		this.net = new Network(128, 128);
		document.body.insertBefore(render.domElement, document.getElementsByTagName("app-main")[0]);
		render.domElement.style.position = "fixed";
		render.domElement.style.left = "0px";
		render.domElement.style.width = "100%";
		render.domElement.style.height = "100%";
		render.domElement.style.zIndex = "1";
		render.domElement.style.pointerEvents = "none";

	}

	public update() {
		this.net.update();
	}

	public getTextures(): THREE.Texture[] {
		return this.net.Textures;
	}
}

export const network = new NetworkService();