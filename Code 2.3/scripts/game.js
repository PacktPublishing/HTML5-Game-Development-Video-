/* global createjs, lib */

/* game object */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberedBox = (function (_createjs$Container) {
  _inherits(NumberedBox, _createjs$Container);

  function NumberedBox(app) {
    var number = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    _classCallCheck(this, NumberedBox);

    _get(Object.getPrototypeOf(NumberedBox.prototype), "constructor", this).call(this);

    // states
    this.number = number;

    // properties
    this.app = app;

    var mc = new lib.NumberedBox();
    mc.numberText.text = number;
    this.addChild(mc);

    // set bounds for others to get the size
    this.setBounds(0, 0, 50, 50);

    this.on('click', this.handleClick.bind(this));
  }

  /* This class contros the game flow. */

  _createClass(NumberedBox, [{
    key: "handleClick",
    value: function handleClick() {
      this.app.handleClick(this);
    }
  }]);

  return NumberedBox;
})(createjs.Container);

var App = (function () {
  function App() {
    _classCallCheck(this, App);

    console.log("Welcome to my great game. Version " + this.version());

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

    this.stage.addChild(new lib.Background());
    this.generateMultipleBoxes();
  }

  // Start the game

  _createClass(App, [{
    key: "version",
    value: function version() {
      return '1.0.0';
    }
  }, {
    key: "generateMultipleBoxes",
    value: function generateMultipleBoxes() {
      var amount = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

      for (var i = amount; i > 0; i--) {
        var mc = new NumberedBox(this, i);

        this.stage.addChild(mc);

        // random position
        mc.x = Math.random() * (this.stage.width - mc.getBounds().width * 2) + mc.getBounds().width;
        mc.y = Math.random() * (this.stage.height - mc.getBounds().height * 2) + mc.getBounds().height;
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(numberedBox) {
      this.stage.removeChild(numberedBox);
    }
  }, {
    key: "retinalize",
    value: function retinalize() {

      this.stage.width = this.canvas.width;
      this.stage.height = this.canvas.height;

      var ratio = window.devicePixelRatio;

      if (ratio === undefined) return;

      this.canvas.setAttribute('width', Math.round(this.stage.width * ratio));
      this.canvas.setAttribute('height', Math.round(this.stage.height * ratio));

      this.stage.scaleX = this.stage.scaleY = ratio;

      // Set CSS
      this.canvas.style.width = this.stage.width + "px";
      this.canvas.style.height = this.stage.height + "px";
    }
  }]);

  return App;
})();

var app = new App();