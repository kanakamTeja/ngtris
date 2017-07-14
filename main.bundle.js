webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: "\n  <a href=\"https://github.com/liuy97/ngtris\" class=\"github-corner\" aria-label=\"View source on Github\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"z-index: 100;fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>\n  <ng-tris></ng-tris>",
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngtris_ngtris_module__ = __webpack_require__("../../../../../src/ngtris/ngtris.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__ngtris_ngtris_module__["a" /* NGTrisModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/ngtris/ngtris.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGTrisComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NGTRISSHAPES = {
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
var NGTrisComponent = (function () {
    function NGTrisComponent() {
        this.rows = 20;
        this.cols = 10;
        this.source = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].timer(500, 500);
    }
    NGTrisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isPlay = false;
        this.gameWidth = window.innerWidth;
        this.gameHeight = window.innerHeight - 60;
        if (this.gameHeight / 2 >= this.gameWidth) {
            this.gameHeight = this.gameWidth;
        }
        else {
            this.gameWidth = this.gameHeight / 2;
        }
        this.gameLeft = (window.innerWidth - this.gameWidth) / 2;
        this.subscription = this.source.subscribe(function (x) { return _this.doTimer(); });
    };
    NGTrisComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NGTrisComponent.prototype.onStart = function () {
        this.isPlay = true;
        this.scores = 0;
        this.lines = 0;
        this.matrix = [];
        for (var row = 0; row < this.rows; row++) {
            for (var col = 0; col < this.cols; col++) {
                this.matrix[row * this.cols + col] = { 'width': '10%', 'height': '5%',
                    'top': row * 5 + '%', 'left': col * 10 + '%' };
            }
        }
        this.activeTetrominoTransform = 0;
        this.initActiveTetromino();
    };
    NGTrisComponent.prototype.onLeftButton = function () {
        if (!this.isPlay) {
            return;
        }
        if (this.isPositionAvailable(this.activeTetrominoPosX - 1, this.activeTetrominoPosY, this.activeTetrominoMatrix)) {
            this.activeTetrominoPosX--;
        }
    };
    NGTrisComponent.prototype.onRightButton = function () {
        if (!this.isPlay) {
            return;
        }
        if (this.isPositionAvailable(this.activeTetrominoPosX + 1, this.activeTetrominoPosY, this.activeTetrominoMatrix)) {
            this.activeTetrominoPosX++;
        }
    };
    NGTrisComponent.prototype.onRotateButton = function () {
        if (!this.isPlay) {
            return;
        }
        this.rotateActiveTetromino();
    };
    NGTrisComponent.prototype.onResize = function (event) {
        if (!this.isPlay) {
            return;
        }
        this.gameWidth = event.target.innerWidth;
        this.gameHeight = event.target.innerHeight - 60;
        if (this.gameHeight / 2 >= this.gameWidth) {
            this.gameHeight = this.gameWidth;
        }
        else {
            this.gameWidth = this.gameHeight / 2;
        }
        this.gameLeft = (window.innerWidth - this.gameWidth) / 2;
    };
    NGTrisComponent.prototype.handleKeyboardEvent = function (event) {
        switch (event.which) {
            case 39:
                this.onRightButton();
                break;
            case 38:
                this.onRotateButton();
                break;
            case 37:
                this.onLeftButton();
                break;
        }
    };
    NGTrisComponent.prototype.checkGameOver = function () {
        for (var col = 0; col < this.cols; col++) {
            if (this.matrix[col].backgroundColor !== undefined) {
                this.isPlay = false;
                return true;
            }
        }
        return false;
    };
    NGTrisComponent.prototype.generateActiveMatrix = function (key, activeMatirx, activeTransform) {
        var transform = NGTRISSHAPES[key].transform[activeTransform];
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                if (transform[row] !== undefined && transform[row][col] === 1) {
                    activeMatirx[row * 4 + col] = { 'top': row * 25 + '%', 'left': col * 25 + '%', 'backgroundColor': NGTRISSHAPES[key].color };
                }
                else {
                    activeMatirx[row * 4 + col] = { 'top': row * 25 + '%', 'left': col * 25 + '%' };
                }
            }
        }
    };
    NGTrisComponent.prototype.initActiveTetromino = function () {
        this.activeTetrominoMatrix = [];
        var keys = Object.keys(NGTRISSHAPES);
        if (this.nextTetrominoKey === undefined || NGTRISSHAPES[this.nextTetrominoKey] === undefined) {
            this.nextTetrominoKey = keys[Math.floor(Math.random() * keys.length)];
        }
        this.activeTetrominoKey = this.nextTetrominoKey;
        this.nextTetrominoKey = keys[Math.floor(Math.random() * keys.length)];
        this.generateActiveMatrix(this.activeTetrominoKey, this.activeTetrominoMatrix, this.activeTetrominoTransform);
        this.activeTetrominoPosY = -2;
        this.activeTetrominoPosX = 3;
        this.nextTetrominoMatrix = [];
        this.generateActiveMatrix(this.nextTetrominoKey, this.nextTetrominoMatrix, 0);
    };
    NGTrisComponent.prototype.rotateActiveTetromino = function () {
        var activeMatrix = [];
        var key = this.activeTetrominoKey;
        this.activeTetrominoTransform = (this.activeTetrominoTransform + 1) % 4;
        var transform = NGTRISSHAPES[key].transform[this.activeTetrominoTransform];
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                if (transform[row] !== undefined && transform[row][col] === 1) {
                    activeMatrix[row * 4 + col] = { 'top': row * 25 + '%', 'left': col * 25 + '%', 'backgroundColor': NGTRISSHAPES[key].color };
                }
                else {
                    activeMatrix[row * 4 + col] = { 'top': row * 25 + '%', 'left': col * 25 + '%' };
                }
            }
        }
        if (this.isPositionAvailable(this.activeTetrominoPosX, this.activeTetrominoPosY + 1, activeMatrix)) {
            this.activeTetrominoMatrix = activeMatrix;
        }
    };
    NGTrisComponent.prototype.doTimer = function () {
        if (!this.isPlay) {
            return;
        }
        if (this.activeTetrominoPosY < this.rows) {
            if (!this.isPositionAvailable(this.activeTetrominoPosX, this.activeTetrominoPosY + 1, this.activeTetrominoMatrix)) {
                this.transferTetrominoToGrid();
                this.initActiveTetromino();
                this.scores += 10;
            }
            else {
                this.activeTetrominoPosY++;
            }
        }
    };
    NGTrisComponent.prototype.isPositionAvailable = function (x, y, activeMatrix) {
        var tetrominoRows = 4;
        var tetrominoCols = 4;
        var relativeRow;
        var relativeCol;
        for (var row = 0; row < tetrominoRows; row++) {
            for (var col = 0; col < tetrominoCols; col++) {
                var cell = activeMatrix[row * tetrominoCols + col];
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
    };
    NGTrisComponent.prototype.clearLines = function () {
        for (var row = this.rows - 1; row >= 0; row--) {
            var completeLine = true;
            for (var col = 0; col < this.cols; col++) {
                if (this.matrix[row * this.cols + col].backgroundColor === undefined) {
                    completeLine = false;
                    break;
                }
            }
            if (completeLine) {
                for (var start = row; start > 0; start--) {
                    for (var col = 0; col < this.cols; col++) {
                        this.matrix[start * this.cols + col].backgroundColor = this.matrix[(start - 1) * this.cols + col].backgroundColor;
                    }
                }
                for (var col = 0; col < this.cols; col++) {
                    this.matrix[col].backgroundColor = undefined;
                }
                this.lines++;
                this.scores += 100;
                row++;
            }
        }
    };
    NGTrisComponent.prototype.transferTetrominoToGrid = function () {
        var tetrominoRows = 4;
        var tetrominoCols = 4;
        var relativeRow;
        var relativeCol;
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                var cell = this.activeTetrominoMatrix[row * tetrominoCols + col];
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
    };
    return NGTrisComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NGTrisComponent.prototype, "onResize", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NGTrisComponent.prototype, "handleKeyboardEvent", null);
NGTrisComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'ng-tris',
        template: "\n  <div class=\"game-space\">\n  <div class=\"game-panel-container\" [ngStyle]=\"{'left':gameLeft + 'px', 'width': gameWidth + 'px'}\">\n    <table>\n      <tr>\n        <td>Score: {{scores}}</td><td>Lines: {{lines}}</td><td>Next:</td>\n        <td>\n          <div class=\"next-tetromino next-tetromino-Z\" style=\"width: 20px; height: 20px;\">\n            <ul class=\"tetromino\">\n              <li class=\"grid-square-block\" *ngFor=\"let cell of nextTetrominoMatrix\" \n                [ngStyle]=\"{'top': cell.top, 'left': cell.left}\">\n                <div *ngIf=\"cell.backgroundColor\" class=\"square-block\" [ngStyle]=\"{'background-color': cell.backgroundColor}\"></div>\n              </li>\n            </ul>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"well-container\" [ngStyle]=\"{'top':'30px', 'left':gameLeft + 'px', 'width': gameWidth + 'px', 'height': gameHeight + 'px'}\">\n    <div class=\"well\">\n      <div class=\"active-tetromino\" [ngStyle]=\"{'top': activeTetrominoPosY * 5 + '%', 'left': activeTetrominoPosX * 10 + '%', 'width': '40%', 'height': '20%'}\">\n        <ul class=\"tetromino\">\n          <li class=\"grid-square-block\" *ngFor=\"let cell of activeTetrominoMatrix\" \n            [ngStyle]=\"{'top': cell.top, 'left': cell.left}\">\n            <div *ngIf=\"cell.backgroundColor\" class=\"square-block\" [ngStyle]=\"{'background-color': cell.backgroundColor}\"></div>\n          </li>\n        </ul>\n      </div>\n      <ul class=\"well-grid\">\n        <li class=\"grid-square-block\" *ngFor=\"let cell of matrix\" \n          [ngStyle]=\"{'top': cell.top, 'left': cell.left, 'width': cell.width, 'height': cell.height}\"\n          >\n          <div *ngIf=\"cell.backgroundColor\" class=\"square-block\" [ngStyle]=\"{'background-color': cell.backgroundColor}\"></div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"game-panel-container\" [ngStyle]=\"{'top': 30 + gameHeight + 'px','left':gameLeft + 'px', 'width': gameWidth + 'px', 'height':'30px'}\">\n  <table style=\"width: 100%; height: 100%; text-align:center;\"><tr>\n    <td><button class=\"game-control\" (click)=\"onRotateButton()\">\n      <svg viewBox=\"0 0 24 24\" style=\"width: 25px; height: 25px;\">\n        <path d=\"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z\"></path>\n      </svg>\n    </button></td>\n    <td><button class=\"game-control\" (click)=\"onLeftButton()\">\n      <svg viewBox=\"0 0 24 24\" style=\"width: 25px; height: 25px;\">\n        <path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path>\n      </svg>\n    </button></td>\n    <td><button class=\"game-control\" (click)=\"onRightButton()\">\n      <svg viewBox=\"0 0 24 24\" style=\"width: 25px; height: 25px;\">\n        <path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"></path>\n      </svg>\n    </button></td>\n  </tr></table>\n  </div>\n  <div *ngIf=\"!isPlay\" class=\"game-panel-container\"\n    [ngStyle]=\"{'top': 30 + gameHeight/4 + 'px','left':gameLeft + gameWidth/4 + 'px', 'width': gameWidth/2 + 'px', 'height':'50px'}\">\n    <button style=\"width: 100%; height: 100%;\" (click)=\"onStart()\">Start</button>\n  </div>\n</div>\n  ",
        styles: [
            "\n    .game-space {\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n\n    .well-container {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: #ecf0f1;\n    }\n\n    .tetromino {\n      margin: 0;\n      padding: 0;\n      list-style-type: none;\n      position: relative;\n      width: 100%;\n      height: 100%;\n    }\n\n    .tetromino .grid-square-block {\n      width: 25%;\n      height: 25%;\n    }\n\n    .well {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n    }\n\n    .game-panel-container {\n      position: absolute;\n      margin: 0;\n      padding: 0;\n      border: 0;\n      height: 25px;\n    }\n\n    .well .well-grid {\n      position: relative;\n      width: 100%;\n      height: 100%;\n    }\n\n    .well .active-tetromino {\n      position: absolute;\n    }\n\n    .well-grid {\n      margin: 0;\n      padding: 0;\n      list-style-type: none;\n    }\n\n    .grid-square-block {\n      position: absolute;\n      transition: top 0.1s linear;\n    }\n\n    .square-block {\n      width: 100%;\n      height: 100%;\n    }\n\n    .game-control {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      background: grey;\n      color: #fff;\n    }\n"
        ]
    })
], NGTrisComponent);

//# sourceMappingURL=ngtris.component.js.map

/***/ }),

/***/ "../../../../../src/ngtris/ngtris.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngtris_component__ = __webpack_require__("../../../../../src/ngtris/ngtris.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGTrisModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NGTrisModule = (function () {
    function NGTrisModule() {
    }
    return NGTrisModule;
}());
NGTrisModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ngtris_component__["a" /* NGTrisComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ngtris_component__["a" /* NGTrisComponent */]
        ],
    })
], NGTrisModule);

//# sourceMappingURL=ngtris.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map