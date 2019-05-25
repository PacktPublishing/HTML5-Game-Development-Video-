"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberedBox = (function (_createjs$Container) {
  _inherits(NumberedBox, _createjs$Container);

  function NumberedBox() {
    var number = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    _classCallCheck(this, NumberedBox);

    _get(Object.getPrototypeOf(NumberedBox.prototype), "constructor", this).call(this);
    var mc = new lib.NumberedBox();
    mc.numberText.text = number;
    this.addChild(mc);

    // random position
    mc.x = Math.random() * 200;
    mc.y = Math.random() * 200;
  }

  return NumberedBox;
})(createjs.Container);

var App = (function () {
  function App() {
    _classCallCheck(this, App);

    console.log("Welcome to my great game. Version " + this.version());

    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    createjs.Ticker.setFPS(60);

    // Add a testing numbered box to stage.
    this.stage.addChild(new NumberedBox(88));

    // keep redrawing the stage.
    createjs.Ticker.on("tick", this.stage);
  }

  // Start the game

  _createClass(App, [{
    key: "version",
    value: function version() {
      return '1.0.0';
    }
  }]);

  return App;
})();

var app = new App();
