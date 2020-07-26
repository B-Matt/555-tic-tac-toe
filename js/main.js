let board = [
  ['X', 'O', 'O'],
  ['X', 'X', 'O'],
  ['O', 'O', 'X']
];

let players = ['X', 'O'];
let currentPlayer;

function setup() {

  createCanvas(555, 555);
  currentPlayer = random(players);
}

function draw() {

  background(255);

  const w = width / 3;
  const h = height / 3;

  drawBoardLines(w, h);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {

      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let char = board[i][j];
      
      strokeWeight(4);

      if(char == players[1]) {

        noFill();
        ellipse(x, y, w/2);
      }
      else if(char == players[0]) {

        const padding = w / 4;
        line(x - padding, y - padding, x + padding, y + padding);
        line(x + padding, y - padding, x - padding, y + padding);
      }

    }
  }
}

function drawBoardLines(w, h) {

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);
}