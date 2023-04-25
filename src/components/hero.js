import React, { useRef, useEffect } from 'react';

export default function Hero() {
    
    useEffect(() => {
        const canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d', {
            willReadFrequently: true,
        });

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          }
      
          resizeCanvas();
          
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const text = 'Nick Langley';
        const textX = canvas.width/2;
        const textY = canvas.height/2;
        
        class Partical {
            constructor(effect, x, y, color) {
              this.effect = effect;
              this.color = color;
              this.size = this.effect.gap;
              this.dx = 0;
              this.dy = 0;
              this.vx = 0;
              this.vy = 0;
              this.force = 0;
              this.angle = 0;
              this.distance = 0;
              this.friction = Math.random() * 0.9 + 0;
              this.ease = Math.random() * 0.9 + 0;
          
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
          
              this.originX = x || this.x;
              this.originY = y || this.y;
            }
            draw(){
                this.effect.context.fillStyle = this.color;
                this.effect.context.fillRect(this.x, this.y, this.size, this.size)
            }
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
            constructor(context, canvasWidth, canvasHeight){
                this.context = context;
                this.canvasWidth = canvasWidth;
                this.canvasHeight = canvasHeight;
                this.textX = this.canvasWidth / 2;
                this.textY = this.canvasHeight / 2;
                this.fontSize = 150;
                this.lineHeight = this.fontSize * 0.9;
                this.maxTextWidth = this.canvasWidth * 0.8;
                // partical text
                this.particles = [];
                this.gap = 1;
                this.mouse = {
                    radius: 5000,
                    x: 0,
                    y: 0
                }
                window.addEventListener('mousemove', (e) => {
                    this.mouse.x = e.x;
                    this.mouse.y = e.y;
                })
            }
            wrapText(text){
                const gradient = this.context.createLinearGradient(0, 0, this.canvasWidth, this.canvasHeight)
                gradient.addColorStop(0.1, '#ff69b4');
                gradient.addColorStop(0.2, '#fc5dad');
                gradient.addColorStop(0.3, '#fa52a6');
                gradient.addColorStop(0.4, '#fc429f');
                gradient.addColorStop(0.5, '#fa238e');
                gradient.addColorStop(0.6, '#fc429f');
                gradient.addColorStop(0.7, '#fa52a6');
                gradient.addColorStop(0.8, '#fc5dad');
                gradient.addColorStop(0.9, '#ff69b4');
                this.context.fillStyle = gradient;
                this.context.font = this.fontSize + 'px Exo';
                this.context.textAlign = 'center';
                this.context.textBaseline = 'middle';
                // break multiline text
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
                let textHeight = this.lineHeight * lineCounter;
                this.textY = this.canvasHeight / 2 - textHeight / 2;
                linesArray.forEach((el, index) => {
                    this.context.fillText(el, this.textX, this.textY + (index * this.lineHeight));
                })
                this.convertToParticales();
            }
            convertToParticales(){
                this.particales = [];
                const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
                this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                for ( let y = 0; y < this.canvasHeight; y += this.gap ){
                    for ( let x = 0; x < this.canvasWidth; x += this.gap ){
                        const index = ( y * this.canvasWidth + x ) * 4;
                        const alpha = pixels[index + 3];
                        if ( alpha > 0 ){
                            const red = pixels[index];
                            const green = pixels[index + 1];
                            const blue = pixels[index + 2];
                            const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
                            this.particales.push(new Partical(this, x, y, color));
                        }
                    }
                }
            }
            render(){
                this.particales.forEach(particale => {
                    particale.update();
                    particale.draw();
                })
            }
        }

        const effect = new Effect(ctx, canvas.width, canvas.height)
        effect.wrapText('Nick Langley')
        effect.render()

        function animate(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            effect.render();
            requestAnimationFrame(animate);
        }
        animate();
    });

    return (
        <>
            <canvas id='canvas1'></canvas>
        </>
    )
}
