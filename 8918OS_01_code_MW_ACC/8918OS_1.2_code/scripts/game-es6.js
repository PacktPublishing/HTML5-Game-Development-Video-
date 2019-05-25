
class App {
  constructor() {
    console.log(`Welcome to my great game. Version ${this.version()}`);
  }
  version() {
    return '1.0.0';
  }
}

// Start the game
var app = new App();
