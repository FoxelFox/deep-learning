import { Injectable } from "@angular/core";
import {Network} from "../../net/network";

@Injectable()
export class NetworkService {

	private net: Network;

	constructor() {
		this.net = new Network(128, 128);
	}

	public update() {
		this.net.update();
	}

	public get Texture(): THREE.Texture {
		return this.net.Texture;
	}
}
