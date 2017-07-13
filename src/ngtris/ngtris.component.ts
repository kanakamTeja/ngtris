import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

const NGTRISSHAPES: any = {
  I: {
    color: '#3cc7d6',
    transform: [[[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
      [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]]
  },
  O: {
    color: '#fbb414',
    transform: [[[1, 1], [1, 1]],
      [[1, 1], [1, 1]],
      [[1, 1], [1, 1]],
      [[1, 1], [1, 1]]]
  },
  T: {
    color: '#b04497',
    transform: [[[0, 1, 0], [1, 1, 1], [0, 0, 0]],
      [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
      [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
      [[0, 1, 0], [1, 1, 0], [0, 1, 0]]]
  },
  J: {
    color: '#3993d0',
    transform: [[[1, 0, 0], [1, 1, 1], [0, 0, 0]],
      [[0, 1, 1], [0, 1, 0], [0, 1, 0]],
      [[0, 0, 0], [1, 1, 1], [0, 0, 1]],
      [[0, 1, 0], [0, 1, 0], [1, 1, 0]]]
  },
  L: {
    color: '#ed652f',
    transform: [[[0, 0, 1], [1, 1, 1], [0, 0, 0]],
      [[0, 1, 0], [0, 1, 0], [0, 1, 1]],
      [[0, 0, 0], [1, 1, 1], [1, 0, 0]],
      [[1, 1, 0], [0, 1, 0], [0, 1, 0]]]
  },
  S: {
    color: '#95c43d',
    transform: [[[0, 1, 1], [1, 1, 0], [0, 0, 0]],
      [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
      [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
      [[1, 0, 0], [1, 1, 0], [0, 1, 0]]]
  },
  Z: {
    color: '#e84138',
    transform: [[[1, 1, 0], [0, 1, 1], [0, 0, 0]],
      [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
      [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
      [[0, 0, 1], [0, 1, 1], [0, 1, 0]]]
  }
};

@Component({
  selector: 'ng-tris',
  templateUrl: './ngtris.component.html',
  styleUrls: ['./ngtris.component.css']
})

export class NGTrisComponent implements OnInit, OnDestroy {
  scores: number;
  lines: number;
  gameWidth: number;
  gameHeight: number;
  gameLeft: number;
  rows: number = 20;
  cols: number = 10;
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
    if(this.gameHeight/2 >= this.gameWidth) {
      this.gameHeight = this.gameWidth;
    } else {
      this.gameWidth = this.gameHeight/2;
    }
    this.gameLeft = (window.innerWidth - this.gameWidth) /2;

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
    if(!this.isPlay) {
      return;
    }
    if(this.isPositionAvailable(this.activeTetrominoPosX - 1, this.activeTetrominoPosY, this.activeTetrominoMatrix)) {
      this.activeTetrominoPosX--;
    }
  }

  onRightButton() {
    if(!this.isPlay) {
      return;
    }
    if(this.isPositionAvailable(this.activeTetrominoPosX + 1, this.activeTetrominoPosY, this.activeTetrominoMatrix)) {
      this.activeTetrominoPosX++;
    }
  }

  onRotateButton() {
    if(!this.isPlay) {
      return;
    }
    this.rotateActiveTetromino();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(!this.isPlay) {
      return;
    }
    this.gameWidth = event.target.innerWidth;
    this.gameHeight = event.target.innerHeight - 60;
    if(this.gameHeight/2 >= this.gameWidth) {
      this.gameHeight = this.gameWidth;
    } else {
      this.gameWidth = this.gameHeight/2;
    }
    this.gameLeft = (window.innerWidth - this.gameWidth) /2;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch(event.which) {
      case 39: //right
        this.onRightButton();
        break;
      case 38: //up
        this.onRotateButton();
        break;
      case 37: //left
        this.onLeftButton();
        break;
    }
  }

  private checkGameOver() {
    for (let col = 0; col < this.cols; col++) {
      if(this.matrix[col].backgroundColor !== undefined) {
        this.isPlay = false;
        return true;
      }
    }
    return false;
  }

  private generateActiveMatrix(key: string, activeMatirx: any[], activeTransform: number) {
    let transform: any = NGTRISSHAPES[key].transform[activeTransform];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if(transform[row]!== undefined && transform[row][col] === 1) {
          activeMatirx[row * 4 + col] = {'top': row * 25 + '%', 'left': col * 25 + '%', 'backgroundColor':NGTRISSHAPES[key].color};
        } else {
          activeMatirx[row * 4 + col] = {'top': row * 25 + '%', 'left': col * 25 + '%'};
        }
      }
    }
  }

  private initActiveTetromino() {
    this.activeTetrominoMatrix = [];
    let keys = Object.keys(NGTRISSHAPES);
    if(this.nextTetrominoKey === undefined || NGTRISSHAPES[this.nextTetrominoKey] === undefined ) {
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
    let activeMatrix = [];
    let key = this.activeTetrominoKey;
    this.activeTetrominoTransform = (this.activeTetrominoTransform + 1) % 4;
    let transform = NGTRISSHAPES[key].transform[this.activeTetrominoTransform];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if(transform[row]!== undefined && transform[row][col] === 1) {
          activeMatrix[row * 4 + col] = {'top': row * 25 + '%', 'left': col * 25 + '%', 'backgroundColor':NGTRISSHAPES[key].color};
        } else {
          activeMatrix[row * 4 + col] = {'top': row * 25 + '%', 'left': col * 25 + '%'};
        }
      }
    }
    if(this.isPositionAvailable(this.activeTetrominoPosX, this.activeTetrominoPosY + 1, activeMatrix)) {
      this.activeTetrominoMatrix = activeMatrix;
    }
  }

  private doTimer() {
    if(!this.isPlay) {
      return;
    }
    if(this.activeTetrominoPosY < this.rows) {
      if(!this.isPositionAvailable(this.activeTetrominoPosX, this.activeTetrominoPosY + 1, this.activeTetrominoMatrix)) {
        this.transferTetrominoToGrid();
        this.initActiveTetromino();
        this.scores += 10;
      } else {
        this.activeTetrominoPosY++;
      }
    }
  }

  private isPositionAvailable(x:number, y:number, activeMatrix: any[]) {
    const tetrominoRows = 4;
    const tetrominoCols = 4;
    let relativeRow;
    let relativeCol;

    for (let row = 0; row < tetrominoRows; row++) {
      for (let col = 0; col < tetrominoCols; col++) {
        let cell = activeMatrix[row * tetrominoCols + col];
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
        if(this.matrix[row * this.cols + col].backgroundColor === undefined) {
          completeLine = false;
          break;
        }
      }
      if(completeLine) {
        for(let start = row; start > 0; start--) {
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
        let cell = this.activeTetrominoMatrix[row * tetrominoCols + col];
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
