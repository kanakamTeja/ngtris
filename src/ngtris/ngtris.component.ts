import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

const NGTRISSHAPES: any = {
  I: {
    color: '#F44336', // red
    transform: [[[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
      [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]]
  },
  O: {
    color: '#9C27B0', // purple
    transform: [[[1, 1], [1, 1]],
      [[1, 1], [1, 1]],
      [[1, 1], [1, 1]],
      [[1, 1], [1, 1]]]
  },
  T: {
    color: '#3F51B5', // Indigo
    transform: [[[0, 1, 0], [1, 1, 1], [0, 0, 0]],
      [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
      [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
      [[0, 1, 0], [1, 1, 0], [0, 1, 0]]]
  },
  J: {
    color: '#03A9F4', // Light Blue
    transform: [[[1, 0, 0], [1, 1, 1], [0, 0, 0]],
      [[0, 1, 1], [0, 1, 0], [0, 1, 0]],
      [[0, 0, 0], [1, 1, 1], [0, 0, 1]],
      [[0, 1, 0], [0, 1, 0], [1, 1, 0]]]
  },
  L: {
    color: '#4CAF50', // Green
    transform: [[[0, 0, 1], [1, 1, 1], [0, 0, 0]],
      [[0, 1, 0], [0, 1, 0], [0, 1, 1]],
      [[0, 0, 0], [1, 1, 1], [1, 0, 0]],
      [[1, 1, 0], [0, 1, 0], [0, 1, 0]]]
  },
  S: {
    color: '#CDDC39', // Lime
    transform: [[[0, 1, 1], [1, 1, 0], [0, 0, 0]],
      [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
      [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
      [[1, 0, 0], [1, 1, 0], [0, 1, 0]]]
  },
  Z: {
    color: '#FF9800', // Orange
    transform: [[[1, 1, 0], [0, 1, 1], [0, 0, 0]],
      [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
      [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
      [[0, 0, 1], [0, 1, 1], [0, 1, 0]]]
  }
};

// tslint:disable component-selector
@Component({
  moduleId: module.id,
  selector: 'ng-tris',
  template: `
  <div class="game-space">
  <div class="game-panel-container" [ngStyle]="{'left':gameLeft + 'px', 'width': gameWidth + 'px'}">
    <table style="width: 100%; height: 100%; text-align:center;">
      <tr>
        <td>Score: {{scores}}</td><td>Lines: {{lines}}</td><td>Next:</td>
        <td>
          <div class="next-tetromino" style="width: 25px; height: 25px;">
            <ul class="tetromino">
              <li class="grid-square-block" *ngFor="let cell of nextTetrominoMatrix"
                [ngStyle]="{'top': cell.top, 'left': cell.left}">
                <div *ngIf="cell.backgroundColor" class="square-block" [ngStyle]="{'background-color': cell.backgroundColor}"></div>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="well-container" [ngStyle]="{'top':'30px', 'left':gameLeft + 'px', 'width': gameWidth + 'px', 'height': gameHeight + 'px'}">
    <div class="well">
      <div class="active-tetromino"
        [ngStyle]="{'top': activeTetrominoPosY * 5 + '%', 'left': activeTetrominoPosX * 10 + '%', 'width': '40%', 'height': '20%'}">
        <ul class="tetromino">
          <li class="grid-square-block" *ngFor="let cell of activeTetrominoMatrix"
            [ngStyle]="{'top': cell.top, 'left': cell.left}">
            <div *ngIf="cell.backgroundColor" class="square-block" [ngStyle]="{'background-color': cell.backgroundColor}"></div>
          </li>
        </ul>
      </div>
      <ul class="well-grid">
        <li class="grid-square-block" *ngFor="let cell of matrix"
          [ngStyle]="{'top': cell.top, 'left': cell.left, 'width': cell.width, 'height': cell.height}"
          >
          <div *ngIf="cell.backgroundColor" class="square-block" [ngStyle]="{'background-color': cell.backgroundColor}"></div>
        </li>
      </ul>
    </div>
  </div>
  <div class="game-panel-container"
    [ngStyle]="{'top': 30 + gameHeight + 'px','left':gameLeft + 'px', 'width': gameWidth + 'px', 'height':'30px'}">
  <table style="width: 100%; height: 100%; text-align:center;"><tr>
    <td><button class="game-control" (click)="onRotateButton()">
      <svg viewBox="0 0 24 24" style="width: 25px; height: 25px;">
        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path>
      </svg>
    </button></td>
    <td><button class="game-control" (click)="onLeftButton()">
      <svg viewBox="0 0 24 24" style="width: 25px; height: 25px;">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </svg>
    </button></td>
    <td><button class="game-control" (click)="onRightButton()">
      <svg viewBox="0 0 24 24" style="width: 25px; height: 25px;">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </svg>
    </button></td>
  </tr></table>
  </div>
  <div *ngIf="!isPlay" class="game-panel-container"
    [ngStyle]="{'top': 30 + gameHeight/4 + 'px','left':gameLeft + gameWidth/4 + 'px', 'width': gameWidth/2 + 'px', 'height':'50px'}">
    <button style="width: 100%; height: 100%;" (click)="onStart()">Start</button>
  </div>
</div>
  `,
  styles: [
  `
    .game-space {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .well-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ecf0f1;
    }

    .tetromino {
      margin: 0;
      padding: 0;
      list-style-type: none;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .tetromino .grid-square-block {
      width: 25%;
      height: 25%;
    }

    .well {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .game-panel-container {
      position: absolute;
      margin: 0;
      padding: 0;
      border: 0;
      height: 25px;
    }

    .well .well-grid {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .well .active-tetromino {
      position: absolute;
    }

    .well-grid {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .grid-square-block {
      position: absolute;
      transition: top 0.1s linear;
    }

    .square-block {
      width: 100%;
      height: 100%;
    }

    .game-control {
      margin: 0;
      padding: 0;
      border: 0;
      background: grey;
      color: #fff;
    }
`
  ]
})

export class NGTrisComponent implements OnInit, OnDestroy {
  scores: number;
  lines: number;
  gameWidth: number;
  gameHeight: number;
  gameLeft: number;
  rows = 20;
  cols = 10;
  matrix: any[];
  activeTetrominoMatrix: any[];
  nextTetrominoMatrix: any[];
  activeTetrominoPosY: number;
  activeTetrominoPosX: number;
  isPlay: boolean;
  private activeTetrominoTransform: number;
  private activeTetrominoKey: string;
  private nextTetrominoKey: string;
  private source = Observable.timer(500, 500);
  private subscription: any;

  ngOnInit() {
    this.isPlay = false;
    this.gameWidth = window.innerWidth;
    this.gameHeight = window.innerHeight - 60;
    if (this.gameHeight / 2 >= this.gameWidth) {
      this.gameHeight = this.gameWidth;
    } else {
      this.gameWidth = this.gameHeight / 2;
    }
    this.gameLeft = (window.innerWidth - this.gameWidth) / 2;

    this.subscription = this.source.subscribe(x => this.doTimer());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onStart() {
    this.isPlay = true;
    this.scores = 0;
    this.lines = 0;
    this.matrix = [];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.matrix[row * this.cols + col] = {'width': '10%', 'height': '5%',
          'top': row * 5 + '%', 'left': col * 10 + '%'};
      }
    }
    this.activeTetrominoTransform = 0;
    this.initActiveTetromino();
  }

  onLeftButton() {
    if (!this.isPlay) {
      return;
    }
    if (this.isPositionAvailable(this.activeTetrominoPosX - 1, this.activeTetrominoPosY, this.activeTetrominoMatrix)) {
      this.activeTetrominoPosX--;
    }
  }

  onRightButton() {
    if (!this.isPlay) {
      return;
    }
    if (this.isPositionAvailable(this.activeTetrominoPosX + 1, this.activeTetrominoPosY, this.activeTetrominoMatrix)) {
      this.activeTetrominoPosX++;
    }
  }

  onRotateButton() {
    if (!this.isPlay) {
      return;
    }
    this.rotateActiveTetromino();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (!this.isPlay) {
      return;
    }
    this.gameWidth = event.target.innerWidth;
    this.gameHeight = event.target.innerHeight - 60;
    if (this.gameHeight / 2 >= this.gameWidth) {
      this.gameHeight = this.gameWidth;
    } else {
      this.gameWidth = this.gameHeight / 2;
    }
    this.gameLeft = (window.innerWidth - this.gameWidth) / 2;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.which) {
      case 39: // right
        this.onRightButton();
        break;
      case 38: // up
        this.onRotateButton();
        break;
      case 37: // left
        this.onLeftButton();
        break;
    }
  }

  private checkGameOver() {
    for (let col = 0; col < this.cols; col++) {
      if (this.matrix[col].backgroundColor !== undefined) {
        this.isPlay = false;
        return true;
      }
    }
    return false;
  }

  private generateActiveMatrix(key: string, activeMatirx: any[], activeTransform: number) {
    const transform: any = NGTRISSHAPES[key].transform[activeTransform];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (transform[row] !== undefined && transform[row][col] === 1) {
          activeMatirx[row * 4 + col] = {'top': row * 25 + '%', 'left': col * 25 + '%', 'backgroundColor': NGTRISSHAPES[key].color};
        } else {
          activeMatirx[row * 4 + col] = {'top': row * 25 + '%', 'left': col * 25 + '%'};
        }
      }
    }
  }

  private initActiveTetromino() {
    this.activeTetrominoMatrix = [];
    const keys = Object.keys(NGTRISSHAPES);
    if (this.nextTetrominoKey === undefined || NGTRISSHAPES[this.nextTetrominoKey] === undefined ) {
      this.nextTetrominoKey = keys[Math.floor(Math.random() * keys.length)];
    }
    this.activeTetrominoKey = this.nextTetrominoKey;
    this.nextTetrominoKey = keys[Math.floor(Math.random() * keys.length)];
    this.generateActiveMatrix(this.activeTetrominoKey, this.activeTetrominoMatrix, this.activeTetrominoTransform);
    this.activeTetrominoPosY = -2;
    this.activeTetrominoPosX = 3;
    this.nextTetrominoMatrix = [];
    this.generateActiveMatrix(this.nextTetrominoKey, this.nextTetrominoMatrix, 0);
  }

  private rotateActiveTetromino() {
    const activeMatrix = [];
    const key = this.activeTetrominoKey;
    this.activeTetrominoTransform = (this.activeTetrominoTransform + 1) % 4;
    const transform = NGTRISSHAPES[key].transform[this.activeTetrominoTransform];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (transform[row] !== undefined && transform[row][col] === 1) {
          activeMatrix[row * 4 + col] = {'top': row * 25 + '%', 'left': col * 25 + '%', 'backgroundColor': NGTRISSHAPES[key].color};
        } else {
          activeMatrix[row * 4 + col] = {'top': row * 25 + '%', 'left': col * 25 + '%'};
        }
      }
    }
    if (this.isPositionAvailable(this.activeTetrominoPosX, this.activeTetrominoPosY + 1, activeMatrix)) {
      this.activeTetrominoMatrix = activeMatrix;
    }
  }

  private doTimer() {
    if (!this.isPlay) {
      return;
    }
    if (this.activeTetrominoPosY < this.rows) {
      if (!this.isPositionAvailable(this.activeTetrominoPosX, this.activeTetrominoPosY + 1, this.activeTetrominoMatrix)) {
        this.transferTetrominoToGrid();
        this.initActiveTetromino();
        this.scores += 10;
      } else {
        this.activeTetrominoPosY++;
      }
    }
  }

  private isPositionAvailable(x: number, y: number, activeMatrix: any[]) {
    const tetrominoRows = 4;
    const tetrominoCols = 4;
    let relativeRow;
    let relativeCol;

    for (let row = 0; row < tetrominoRows; row++) {
      for (let col = 0; col < tetrominoCols; col++) {
        const cell = activeMatrix[row * tetrominoCols + col];
        if (cell.backgroundColor) {
          relativeRow = y + row;
          relativeCol = x + col;

          if (relativeCol < 0 || relativeCol >= this.cols) {
            return false;
          }

          if (relativeRow >= this.rows) {
            return false;
          }

          if (relativeRow >= 0) {
            if (this.matrix[relativeRow * this.cols + relativeCol].backgroundColor) {
              return false;
            }
          }
        }
      }
    }

    return true;
  }

  private clearLines() {
    for (let row = this.rows - 1; row >= 0; row--) {
      let completeLine = true;
      for (let col = 0; col < this.cols; col++) {
        if (this.matrix[row * this.cols + col].backgroundColor === undefined) {
          completeLine = false;
          break;
        }
      }
      if (completeLine) {
        for (let start = row; start > 0; start--) {
          for (let col = 0; col < this.cols; col++) {
            this.matrix[start * this.cols + col].backgroundColor = this.matrix[(start - 1) * this.cols + col].backgroundColor;
          }
        }
        for (let col = 0; col < this.cols; col++) {
          this.matrix[col].backgroundColor = undefined;
        }
        this.lines++;
        this.scores += 100;
        row++;
      }
    }
  }

  private transferTetrominoToGrid() {
    const tetrominoRows = 4;
    const tetrominoCols = 4;
    let relativeRow;
    let relativeCol;

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const cell = this.activeTetrominoMatrix[row * tetrominoCols + col];
        if (cell && cell.backgroundColor) {
          relativeRow = this.activeTetrominoPosY + row;
          relativeCol = this.activeTetrominoPosX + col;

          if (this.matrix[relativeRow * this.cols + relativeCol]) {
            this.matrix[relativeRow * this.cols + relativeCol].backgroundColor = cell.backgroundColor;
          }
        }
      }
    }
    this.clearLines();
    this.checkGameOver();
  }

}
