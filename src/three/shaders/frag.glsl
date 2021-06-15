uniform float uTime;

varying vec3 vColor;
varying float vSpeed;
varying vec3 vPos;



/*------------------------------
MAIN
------------------------------*/
void main() {
  vec2 uv = gl_PointCoord - .5;
  float d = smoothstep(0.002, 0.1, length(uv));
  float alpha = 1. - d;

  vec4 color = vec4(vColor, alpha);
  gl_FragColor = color;
}