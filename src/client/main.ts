import * as THREE from "three";
import {Network} from "../net/Network";

const SIZE = 128;

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1000);
let render = new THREE.WebGLRenderer();

render.setSize(SIZE, SIZE);
document.body.appendChild(render.domElement);


let network = new Network(SIZE, SIZE);
