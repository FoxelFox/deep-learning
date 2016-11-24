import * as THREE from "three";
import {Network} from "../net/Network";
import {render} from "../processing/Render";

const SIZE = 128;

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1000);

render.setSize(SIZE, SIZE);


window.addEventListener("DOMContentLoaded", () => {
	document.body.appendChild(render.domElement);

	let network = new Network(SIZE, SIZE);
	network.init();
});
