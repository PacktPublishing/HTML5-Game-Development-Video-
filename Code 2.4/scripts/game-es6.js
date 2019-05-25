/* global createjs, lib */

/* game object */
class NumberedBox extends createjs.Container{
  constructor(app, number=0) {
    super();

    // states
    this.number = number;

    // properties
    this.app = app;


    var mc = new lib.NumberedBox();
    mc.numberText.text = number;
    this.addChild(mc);

    // set bounds for others to get the size
    this.setBounds(0,0,50,50);

    this.on('click', this.handleClick.bind(this));
  }
  handleClick() {
    this.app.handleClick(this);
  }
}

/* This class controls the game data. */
class AppData {
  constructor() {
    // TODO: 3 for debugging. Change to larger number in real game. e.g. 20.
    this.amountOfBox = 3;
    this.resetData();
  }
  resetData() {
    this.currentNumber = 1;
  }
  nextNumber() {
    this.currentNumber += 1;
  }
  isRightNumber(number) {
    return (number == this.currentNumber);
  }
  isGameWin(){
    // TODO
  }
}

/* This class contros the game flow. */
class App {
  constructor() {
    console.log(`Welcome to my great game. Version ${this.version()}`);

    this.appData = new AppData();

    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    // canvas width & height may change, but original stage dimension is stored.
    this.stage.width = this.canvas.width;
    this.stage.height = this.canvas.height;

    this.retinalize();

    createjs.Ticker.setFPS(60);

    // keep redrawing the stage.
    createjs.Ticker.on("tick", this.stage);

    createjs.Touch.enable(this.stage);

    this.restartGame();
  }

  version() {
    return '1.0.0';
  }

  restartGame() {
    this.appData.resetData();
    this.stage.removeAllChildren();
    this.stage.addChild(new lib.Background());
    this.generateMultipleBoxes(this.appData.amountOfBox);
  }

  generateMultipleBoxes(amount=10) {
    for (var i=amount; i>0; i--) {
      var mc = new NumberedBox(this, i);

      this.stage.addChild(mc);

      // random position
      mc.x = Math.random() * (this.stage.width - mc.getBounds().width * 2) + mc.getBounds().width;
      mc.y = Math.random() * (this.stage.height - mc.getBounds().height * 2) + mc.getBounds().height;
    }
  }

  handleClick(numberedBox) {
    if (this.appData.isRightNumber(numberedBox.number)) {
      this.stage.removeChild(numberedBox);
      this.appData.nextNumber();
    }
  }

  retinalize() {

    this.stage.width = this.canvas.width;
    this.stage.height = this.canvas.height;

    let ratio = window.devicePixelRatio;

    if (ratio === undefined)
      return;

    this.canvas.setAttribute('width', Math.round( this.stage.width * ratio ) );
    this.canvas.setAttribute('height', Math.round( this.stage.height * ratio ) );

    this.stage.scaleX = this.stage.scaleY = ratio;

    // Set CSS
    this.canvas.style.width = this.stage.width+"px";
    this.canvas.style.height = this.stage.height+"px";

  }

}

// Start the game
var app = new App();
