import React, { useRef, useEffect, forwardRef } from 'react';
import Scroll from '../scroll/Scroll';

const Header = forwardRef((props, ref) => {
    const canvasRef = useRef();

useEffect(() => {
    // Get the canvas and its context
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d', {
        willReadFrequently: true,
    });
    
    // Set the canvas size to fill the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Define the Particle class
    class Partical {
        constructor(effect, x, y, color) {
            // Store a reference to the Effect object
            this.effect = effect;
            // Set the color and size of the particle
            this.color = color;
            this.size = this.effect.gap;
            // Set the initial velocity and acceleration to 0
            this.dx = 0;
            this.dy = 0;
            this.vx = 0;
            this.vy = 0;
            this.force = 0;
            // Set the initial angle and distance to the mouse to 0
            this.angle = 0;
            this.distance = 0;
            // Set the friction and ease values randomly
            this.friction = Math.random() * 0.9 + 0;
            this.ease = Math.random() * 0.9 + 0;
        
            // Set the initial position of the particle based on a random side of the canvas
            const randomSide = Math.floor(Math.random() * 4); // Generate a random number between 0 and 3
            switch (randomSide) {
            case 0: // Top edge
                this.x = Math.random() * effect.canvasWidth;
                this.y = -this.size;
                break;
            case 1: // Right edge
                this.x = effect.canvasWidth + this.size;
                this.y = Math.random() * effect.canvasHeight;
                break;
            case 2: // Bottom edge
                this.x = Math.random() * effect.canvasWidth;
                this.y = effect.canvasHeight + this.size;
                break;
            case 3: // Left edge
                this.x = -this.size;
                this.y = Math.random() * effect.canvasHeight;
                break;
            default:
                break;
            }
        
            // Store the original position of the particle
            this.originX = x || this.x;
            this.originY = y || this.y;
        }
        // Draw the particle as a square with the specified color and size
        draw(){
            this.effect.context.fillStyle = this.color;
            this.effect.context.fillRect(this.x, this.y, this.size, this.size)
        }
        // Update the particle's position based on its velocity and acceleration
        update(){
            this.dx = this.effect.mouse.x - this.x;
            this.dy = this.effect.mouse.y - this.y;
            this.distance = this.dx * this.dx + this.dy * this.dy;
            this.force = -this.effect.mouse.radius / this.distance;

            if ( this.distance < this.effect.mouse.radius ){
                this.angle = Math.atan2(this.dy, this.dx);
                this.vx += this.force * Math.cos(this.angle);
                this.vy += this.force * Math.sin(this.angle);
            }
            this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
            this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        }
    }

    class Effect {
        constructor(context, canvasWidth, canvasHeight, colorMode) {
            // constructor initializes properties of the Effect object
            this.context = context; // the canvas context to draw on
            this.canvasWidth = canvasWidth; // width of the canvas
            this.canvasHeight = canvasHeight; // height of the canvas
            this.colorMode = colorMode;
            this.textX = this.canvasWidth / 2; // x-coordinate of the text
            this.textY = this.canvasHeight / 2; // y-coordinate of the text
            this.fontSize = this.canvasWidth < 768 ? 80 : 120; // font size based on canvas width
            this.fontWeight = '900'; // font weight
            this.lineHeight = this.fontSize * 0.9; // line height based on font size
            this.maxTextWidth = this.canvasWidth * 0.8; // maximum width of the text
            // particle text
            this.particles = []; // array to store particles
            this.gap = 1; // gap between particles
            this.mouse = { // mouse position and radius for particle interaction
            radius: 5000,
            x: 0,
            y: 0,
            };
            // event listener to update mouse position on mouse move
            window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
            });
        } 
        // method to wrap text and convert it to particles
        wrapText(text){
            // create gradient for the text fill
            let gradient;
            if (this.colorMode === 'dark') {
                gradient = this.context.createLinearGradient(0, 0, this.canvasWidth, this.canvasHeight);
                gradient.addColorStop(0.25, '#ff369b');
                gradient.addColorStop(0.5, '#ff83c1');
                gradient.addColorStop(0.75, '#ff369b');
            } else {
                gradient = this.context.createLinearGradient(0, 0, this.canvasWidth, this.canvasHeight);
                gradient.addColorStop(0.25, '#0234E7');
                gradient.addColorStop(0.5, '#053BFD');
                gradient.addColorStop(0.75, '#0234E7');
            }

            this.context.fillStyle = gradient;
        
            // set font style and alignment
            this.context.font = this.fontWeight + ' ' + this.fontSize + 'px Montserrat';
            this.context.textAlign = 'center';
            this.context.textBaseline = 'middle';
        
            // break multiline text into lines
            let linesArray = [];
            let words = text.split(' ');
            let lineCounter = 0;
            let line = '';
            for ( let i = 0; i < words.length; i++ ){
                let testLine = line + words[i] + ' ';
                if (this.context.measureText(testLine).width > this.maxTextWidth){
                    line = words[i] + ' ';
                    lineCounter++;
                } else {
                    line = testLine;
                }
                linesArray[lineCounter] = line;
            }      
            // set text height and position
            let textHeight = this.lineHeight * lineCounter;
            this.textY = this.canvasHeight / 2 - textHeight / 2;
        
            // draw each line of text
            linesArray.forEach((el, index) => {
                this.context.fillText(el, this.textX, this.textY + (index * this.lineHeight));
            })
            // convert text to particles
            this.convertToParticales();
        }

        convertToParticales(){
            // Initialize the `particales` array
            this.particales = [];
            
            // Get the image data from the canvas context
            const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
            
            // Clear the canvas
            this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            
            // Loop through each pixel in the image data and create a new `Partical` object if the alpha value is greater than 0
            for ( let y = 0; y < this.canvasHeight; y += this.gap ){
                for ( let x = 0; x < this.canvasWidth; x += this.gap ){
                    // Calculate the index of the pixel in the image data array
                    const index = ( y * this.canvasWidth + x ) * 4;
                    
                    // Get the alpha value of the pixel
                    const alpha = pixels[index + 3];
                    
                    // If the alpha value is greater than 0, create a new `Partical` object
                    if ( alpha > 0 ){
                        // Get the red, green, and blue values of the pixel
                        const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        
                        // Construct the color string from the red, green, and blue values
                        const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
                        
                        // Create a new `Partical` object and add it to the `particales` array
                        this.particales.push(new Partical(this, x, y, color));
                    }
                }
            }
        }
        
        render(){
            // Loop through each `Partical` object in the `particales` array, update its position, and draw it
            this.particales.forEach(particale => {
                particale.update();
                particale.draw();
            })
        }            
    }

    let effect = null;

    function init() { // Declare a function named 'init'
        canvas.width = window.innerWidth; // Set the width of the canvas to the window's inner width
        canvas.height = window.innerHeight; // Set the height of the canvas to the window's inner height
        effect = new Effect(ctx, canvas.width, canvas.height); // Create a new 'Effect' object, passing in the context, canvas width, and canvas height
        effect.wrapText('Nick Langley'); // Call the 'wrapText' method of the 'effect' object, passing in the string 'Nick Langley'
        animate(); // Call the 'animate' function
    }
    
    function animate() { // Declare a function named 'animate'
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas by filling it with the default background color (white)
        effect.render(); // Call the 'render' method of the 'effect' object
        requestAnimationFrame(animate); // Request the next animation frame and call the 'animate' function again
    }
    
    init(); // Call the 'init' function
    
   // Add debounce function
    function debounce(func, wait) {
      let timeout;
      return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
      };
    }

    // Add throttle function
    function throttle(func, limit) {
      let inThrottle;
      return function (...args) {
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    }

    // event listener to update mouse position on mouse move
    const handleMouseMove = throttle((e) => {
      effect.mouse.x = e.x;
      effect.mouse.y = e.y;
    }, 50);
    window.addEventListener('mousemove', handleMouseMove);

    // Debounce the resize event
    const debouncedResize = debounce(() => {
      init();
    }, 100);

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return (
    <header ref={ref} id="top">
      <canvas ref={canvasRef} id="canvas1"></canvas>
      <Scroll />
    </header>
  );
});

export default Header;