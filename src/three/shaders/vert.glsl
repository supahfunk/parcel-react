#define PI 3.14159265
attribute vec3 aColor;
attribute float aSpeed;

uniform float uTime;

varying float vSpeed;
varying vec3 vColor;
varying vec3 vPos;


void main() {
  vColor = aColor;
  vSpeed = aSpeed;
  vec3 pos = position;
  vPos = pos;
  
  vec4 mvPos = modelViewMatrix * vec4( pos, 1.0 );
  gl_PointSize = aSpeed * ( 300.0 / -mvPos.z );
  gl_Position = projectionMatrix * mvPos;
}