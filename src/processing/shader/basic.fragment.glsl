uniform sampler2D map;
varying vec2 v_uv;
void main() {
	vec4 self = texture2D(map, v_uv);
	gl_FragColor = vec4(self.x +0.5, 0.0, 0.0, 1.0);
}
