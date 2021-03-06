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

/* This class contros the game flow. */
class App {
  constructor() {
    console.log(`Welcome to my great game. Version ${this.version()}`);

    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    // canvas width & height may change, but original stage dimension is stored.
    this.stage.width = this.canvas.width;
    this.stage.height = this.canvas.height;

    createjs.Ticker.setFPS(60);

    // keep redrawing the stage.
    createjs.Ticker.on("tick", this.stage);

    createjs.Touch.enable(this.stage);

    this.stage.addChild(new lib.Background());
    this.generateMultipleBoxes();
  }

  version() {
    return '1.0.0';
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
    this.stage.removeChild(numberedBox);
  }
}

// Start the game
var app = new App();
