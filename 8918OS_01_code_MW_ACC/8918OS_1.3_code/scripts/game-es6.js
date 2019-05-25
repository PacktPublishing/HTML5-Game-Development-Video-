
class App {
  constructor() {
    console.log(`Welcome to my great game. Version ${this.version()}`);

    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    createjs.Ticker.setFPS(60);
    // keep redrawing the stage.
    createjs.Ticker.on("tick", this.stage);

    
  }

  version() {
    return '1.0.0';
  }

}

// Start the game
var app = new App();
