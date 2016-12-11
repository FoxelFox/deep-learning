import {Network} from "../../net/network";

export class NetworkService {

	private net: Network;

	constructor() {
		this.net = new Network(128, 128);
	}

	public update() {
		this.net.update();
	}

	public getTexture(): THREE.Texture {
		return this.net.Texture;
	}
}
