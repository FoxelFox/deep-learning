import {RenderPass} from "../processing/render-pass";

export class Network {

  private net: RenderPass;

	constructor(sizeX: number, sizeY: number) {
		this.net = new RenderPass(sizeX, sizeY);
	}

	public update() {
		this.net.process();
	}

	get Texture() {
		return this.net.Output;
	}

	public init() {
		this.net.processOnCanvas();
	}
}
