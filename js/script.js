const canvasEl = document.querySelector("canvas");
const canvasCtx = canvasEl.getContext("2d");

const lineWidth = 15;
const gapX = 10;

function setup() {
  canvasEl.width = canvasCtx.width = window.innerWidth;
  canvasEl.height = canvasCtx.height = window.innerHeight;
}

const field = {
  //Desenho do gramado
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function () {
    canvasCtx.fillStyle = "#286047";
    canvasCtx.fillRect(0, 0, this.w, this.y);
  },
};

const line = {
  //Desenho da linha central
  w: 15,
  h: field.h,
  draw: function () {
    canvasCtx.fillStyle = "#ffffff";
    canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h);
  },
};

const leftPaddle = {
  //Desenho da raquete esquerda
  x: gapX,
  y: field.h / 2,
  w: line.w,
  h: 200,
  draw: function () {
    canvasCtx.fillStyle = "#ffffff";
    canvasCtx.fillRect(this.x, this.y, line.w, this.h);
  },
};

function draw() {
  field.draw();
  line.draw();
  leftPaddle.draw();

  //Desenho da raquete direita
  canvasCtx.fillStyle = "#ffffff";
  canvasCtx.fillRect(window.innerWidth - lineWidth - gapX, 500, lineWidth, 200);

  //Desenho da bola
  canvasCtx.fillStyle = "#ffffff";
  canvasCtx.beginPath();
  canvasCtx.arc(120, 240, 20, 0, 2 * Math.PI, false);
  canvasCtx.fill();
}

setup();
draw();
