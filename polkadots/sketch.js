CIRCLE_WIDTH_DEFAULT = 50;
CIRCLE_HEIGHT_DEFAULT = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  let pd = new Polkadot(0, 0);
  pd.w += sin(frameCount * 0.01) * 20;
  pd.h += cos(frameCount * 0.01) * 20;
  pd.display();
}

class Polkadot {
  constructor(x, y, w, h) {
    if (x !== undefined) {
      this.x = x;
    } else {
      this.x = random(width);
    }
    if (y !== undefined) {
      this.y = y;
    } else {
      this.y = random(height);
    }
    if (w !== undefined) {
      this.w = w;
    } else {
      this.w = CIRCLE_WIDTH_DEFAULT;
    }
    if (h !== undefined) {
      this.h = h;
    } else {
      this.h = CIRCLE_HEIGHT_DEFAULT;
    }
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.w, this.h);
  }
}

class PerlinGrid {
  cols = 10;
  rows = 10;
  constructor(cols, rows) {
    if (cols !== undefined) {
      this.cols = cols;
    }
    if (rows !== undefined) {
      this.rows = rows;
    }
  }

  getValues(x, y) {
    return noise(x, y);
  }
}