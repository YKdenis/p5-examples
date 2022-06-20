precision mediump float;
precision highp sampler2D;

varying vec2 vTexCoord;

// Get the normal from the vertex shader
varying vec3 vNormal;

uniform sampler2D uImage;


void main() {

    vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  uv = 0.5 - uv;
  
  // Normalize the normal
  vec3 color = vNormal * 1.0 + 0.5;

  vec4 image = texture2D(uImage, vTexCoord);

  // convert the texture to grayscale by using the luma function  

   if (image.r <  0.2 && image.g < 0.2 && image.b < 0.2) { 
    gl_FragColor = vec4(color, 1.0); 
  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
  
  // // Lets just draw the texcoords to the screen
  // gl_FragColor = image;
}