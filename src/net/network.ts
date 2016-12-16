import {RenderPass} from "../processing/render-pass";

export class Network {

	private net: RenderPass[] = [];

	constructor(sizeX: number, sizeY: number) {
		this.net.push(new RenderPass(sizeX, sizeY));
	}

	public update() {
		for (let tex of this.net) {
			tex.process();
		}
	}

	get Textures() {
		let array = [];
		for (let tex of this.net) {
			array.push(tex.Output);
		}
		return array;
	}
}
