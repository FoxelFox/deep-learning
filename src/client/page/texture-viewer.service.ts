import {TextureViewerComponent} from "./texture-viewer.component";

export class TextureViewerService {
	private viewers: {[key: number]: TextureViewerComponent} = {};

	public add(viewer: TextureViewerComponent) {
		this.viewers[viewer.texture.id] = viewer;
	}

	public remove(viewer: TextureViewerComponent) {
		delete this.viewers[viewer.texture.id];
	}

}
