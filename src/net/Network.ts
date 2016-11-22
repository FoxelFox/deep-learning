import * as THREE from "three";

export class Network {

  private net: THREE.WebGLRenderTarget;

  constructor(sizeX: number, sizeY: number) {
    this.net = new THREE.WebGLRenderTarget(sizeX, sizeY);
    this.init();
  }

  public update() {

  }

  get Texture() {
    return this.net.texture;
  }

  private init() {
    console.log(this.net);
  }
}
