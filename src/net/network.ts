import {RenderPass} from "../processing/render-pass";

export class Network {

	private net: RenderPass[] = [];

	constructor(sizeX: number, sizeY: number) {
		for (let i = 0; i < 1; ++i) {
			this.net.push(new RenderPass(sizeX, sizeY));
		}
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
