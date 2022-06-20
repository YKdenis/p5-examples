precision mediump float;
precision highp sampler2D;

varying vec2 vTexCoord;

// Get the normal from the vertex shader
varying vec3 vNormal;

uniform sampler2D uImage;
uniform float uFrameCount;


void main() {

    vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  uv = 0.5 - uv;
  
  // Normalize the normal
  vec3 color = vNormal * 0.5 + 0.5;

  float r = sin(uFrameCount / 50.0 * uv.x / 2.0) + 0.4;
  float g = sin(uFrameCount / 70.0 * uv.y) ;
  float b = sin(uFrameCount / 100.0) * uv.x * uv.y + 0.8;

  vec4 image = texture2D(uImage, vTexCoord);


   if (image.r <  0.2 && image.g < 0.2 && image.b < 0.2) { 
      gl_FragColor = vec4(r, g, b, 1.0); 

  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
  
  // // Lets just draw the texcoords to the screen
  // gl_FragColor = image;
}