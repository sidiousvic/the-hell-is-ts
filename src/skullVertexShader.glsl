varying vec3 vPosition;
uniform float uPageYOffset;

void main() {
    vec3 pos = position;
    vPosition = pos;
    vec4 mvPosition = modelViewMatrix * 0.1 * vec4(pos, 1.0);
    mvPosition.x -= uPageYOffset * 0.002;
    mvPosition.y -= uPageYOffset * 0.0005;
    mvPosition.z += uPageYOffset * 0.0015;
    gl_Position = projectionMatrix * mvPosition;
}