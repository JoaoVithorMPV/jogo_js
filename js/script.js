const canvasEl = document.querySelector("canvas");
const canvasCtx = canvasEl.getContext("2d");

const lineWidth = 15;
const gapX = 10;
const mouse = { x: 0, y: 0 };

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
    canvasCtx.fillRect(0, 0, this.w, this.h);
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
  _move: function () {
    this.y = mouse.y;
  },
  draw: function () {
    canvasCtx.fillStyle = "#ffffff";
    canvasCtx.fillRect(this.x, this.y, line.w, this.h);

    this._movie();
  },
};

const rightPaddle = {
  x: field.w - line.w - gapX,
  y: field.h / 2,
  w: line.w,
  h: 200,
  draw: function () {
    canvasCtx.fillStyle = "#ffffff";
    canvasCtx.fillRect(this.x, this.y, this.w, this.h);
  },
};

const ball = {
  //Desenho da bola
  x: field.w / 2,
  y: field.h / 2,
  r: 20,
  speed: 5,
  _move: function () {
    this.x += this.speed;
    this.y += this.speed;
  },
  draw: function () {
    canvasCtx.fillStyle = "#F0F72D";
    canvasCtx.beginPath();
    canvasCtx.arc(this.x, this.y, 20, 0, 2 * Math.PI, false);
    canvasCtx.fill();

    this._move();
  },
};

function draw() {
  field.draw();
  line.draw();
  leftPaddle.draw();
  rightPaddle.draw();
  ball.draw();
}

window.animateFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    }
  );
})();

function main() {
  animateFrame(main);
  draw();
}

setup();
main();

canvasEl.addEventListener("mousemove", function (e) {
  (mouse.x = e.pageX), (mouse.y = e.pageY);
});
