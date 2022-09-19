// Get the source image to be edited
let image = document.getElementById('sourceImage');

// Get the canvas for the edited image
let canvas = document.getElementById('canvas');

// Get the 2D context of the image
let context = canvas.getContext('2d');

// Get all the sliders of the image
let brightnessSlider = document.getElementById("brightnessSlider");
let contrastSlider = document.getElementById("contrastSlider");
let grayscaleSlider = document.getElementById("grayscaleSlider");
let hueRotateSlider = document.getElementById("hueRotateSlider");
let saturateSlider = document.getElementById("saturationSlider");
let sepiaSlider = document.getElementById("sepiaSlider");
