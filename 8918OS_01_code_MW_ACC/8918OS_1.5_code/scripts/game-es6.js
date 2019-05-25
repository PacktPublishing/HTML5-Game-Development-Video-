
class NumberedBox extends createjs.Container{
  constructor(number=0) {
    super();
    var mc = new lib.NumberedBox();
    mc.numberText.text = number;
    this.addChild(mc);

    // random position
    mc.x = Math.random() * 200;
    mc.y = Math.random() * 200;
  }
}

class App {
  constructor() {
    console.log(`Welcome to my great game. Version ${this.version()}`);

    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    createjs.Ticker.setFPS(60);

    // Add a testing numbered box to stage.
    this.stage.addChild(new NumberedBox(88));

    // keep redrawing the stage.
    createjs.Ticker.on("tick", this.stage);

  }

  version() {
    return '1.0.0';
  }

}

// Start the game
var app = new App();
