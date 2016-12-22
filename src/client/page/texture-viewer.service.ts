import {Injectable} from "@angular/core"
import {TextureViewerComponent} from "./texture-viewer.component";
import {render} from "../../processing/render"

// @Injectable()
export class TextureViewerService {
	private viewers: {[key: number]: TextureViewerComponent} = {};

	public add(viewer: TextureViewerComponent) {
		this.viewers[viewer.texture.id] = viewer;
	}

	public remove(viewer: TextureViewerComponent) {
		delete this.viewers[viewer.texture.id];
	}

	public update() {
		for(let i in this.viewers){
			this.viewers[i].update();
		}
	}

}


export const textures = new TextureViewerService();