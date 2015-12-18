#version 100
precision mediump float;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjection;
uniform mat4 uNormalMatrix;

uniform sampler2D uMainTex;

varying vec3 fNormal;
varying vec2 fTexcoord;

void main() {
  vec4 tex = texture2D( uMainTex, fTexcoord );
  float d = 0.1 + 0.9 * dot( fNormal, normalize(vec3( -0.5, 1, 0.5 )) );
  gl_FragColor = vec4( tex.rgb * d, 1 );
}
