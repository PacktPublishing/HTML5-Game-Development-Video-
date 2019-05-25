"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// alias
var cjs = createjs;

var App = (function () {
  function App() {
    _classCallCheck(this, App);

    console.log("Welcome to my great game. Version " + this.version());

    this.canvas = document.getElementById("game-canvas");
    this.stage = new cjs.Stage(this.canvas);

    cjs.Ticker.setFPS(60);
    // keep redrawing the stage.
    cjs.Ticker.on("tick", this.stage);

    // game loop.
    cjs.Ticker.on("tick", this.tick.bind(this));
  }

  _createClass(App, [{
    key: "version",
    value: function version() {
      return '1.0.0';
    }

    // keep running.

  }, {
    key: "tick",
    value: function tick() {
      if (cjs.Ticker.paused) return;
      // your tick code
      console.log("Tick.", this.stage);
    }
  }]);

  return App;
})();

// Start the game

var app = new App();
