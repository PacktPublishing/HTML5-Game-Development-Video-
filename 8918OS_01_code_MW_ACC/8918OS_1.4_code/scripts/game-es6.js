// alias
var cjs = createjs;

class App {
  constructor() {
    console.log(`Welcome to my great game. Version ${this.version()}`);

    this.canvas = document.getElementById("game-canvas");
    this.stage = new cjs.Stage(this.canvas);

    cjs.Ticker.setFPS(60);
    // keep redrawing the stage.
    cjs.Ticker.on("tick", this.stage);

    // game loop.
    cjs.Ticker.on("tick", this.tick.bind(this));
  }

  version() {
    return '1.0.0';
  }

  // keep running.
  tick()  {
    if(cjs.Ticker.paused) return;
    // your tick code
    console.log("Tick.", this.stage);
  }
}

// Start the game
var app = new App();
