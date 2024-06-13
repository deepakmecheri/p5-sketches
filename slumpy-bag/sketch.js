let grid_split = 150;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(233);
  // draw_grid();
  for (let i = 0; i < grid_split; i++) {
    for (let j = 0; j < grid_split; j++) {
      fill_grid(i, j);
    }
  }
  // noLoop();
}

function draw_grid() {
  for (let i = 0; i < grid_split; i++) {
    let x = i * width / grid_split;
    let y = i * height / grid_split;
    line(x, 0, x, height)
    line(0, y, width, y)
  }
}

function fill_grid(grid_x, grid_y) {
  side_length = width / grid_split;
  let x = grid_x * side_length;
  let y = grid_y * side_length;
  let detail_z = 0.009;
  let detail = 0.009;
  let color = noise(grid_x * detail, grid_y * detail, frameCount*detail_z);
  if (color > 0.5) {
    fill(0);
  } else {  
    fill(255);
  }
  noStroke();
  rect(x, y, x+side_length, y+side_length);
}