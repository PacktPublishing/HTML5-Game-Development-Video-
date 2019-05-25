(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Restart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Restart Game", "30px 'Bernard MT Condensed'", "#586700");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 182;
	this.text.setTransform(85.7,10.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7E02B").s("#000000").ss(1,1,1).rr(-85.85,-32.85,171.7,65.7,9);
	this.shape.setTransform(85.8,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBFF00").s("#000000").ss(1,1,1).rr(-85.85,-32.85,171.7,65.7,9);
	this.shape_1.setTransform(85.8,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#91A803").s("#000000").ss(1,1,1).rr(-85.85,-32.85,171.7,65.7,9);
	this.shape_2.setTransform(85.8,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-1,185.9,67.7);


(lib.Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjrjtQDqgKDsAKQAMDsgMDqQjsAUjqgUQgKjqAKjsg");
	this.shape.setTransform(23.6,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9));

	// Gradient
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.612)"],[0.055,1],-3.4,-12.7,0,-3.4,-12.7,36.4).s().p("AjqDoQgNjrANjqQDqgLDrALQANDsgNDpQh1ALh2AAQh0AAh2gLg");
	this.shape_1.setTransform(23.6,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(9));

	// Color Tint
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFED00").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_2.setTransform(23.6,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#86FF93").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_3.setTransform(23.6,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#95F4FF").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_4.setTransform(23.6,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC561").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_5.setTransform(23.6,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CEAAFF").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_6.setTransform(23.6,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDBAFF").s().p("AjqDoQgNjqANjrQDqgJDrAJQANDrgNDqQh3ALh0AAQh1AAh1gLg");
	this.shape_7.setTransform(23.6,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,50.3,50.7);


(lib.Background = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7E02B").s().p("A3bfPMAAAg+eMAu2AAAMAAAA+eg");
	this.shape.setTransform(150,200);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,400);


(lib.NumberedBox = function() {
	this.initialize();

	// Number Text
	this.numberText = new cjs.Text("99", "30px 'Bernard MT Condensed'");
	this.numberText.name = "numberText";
	this.numberText.textAlign = "center";
	this.numberText.lineHeight = 32;
	this.numberText.lineWidth = 45;
	this.numberText.setTransform(21.5,3.1);

	// Box
	this.instance = new lib.Box();
	this.instance.setTransform(23.6,23.6,1,1,0,0,0,23.6,23.6);

	this.addChild(this.instance,this.numberText);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,49.3,50.4);


(lib.GameoverView = function() {
	this.initialize();

	// Button
	this.restartButton = new lib.Restart();
	this.restartButton.setTransform(154.1,270.2,1,1,0,0,0,85.8,32.8);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.Restart(), 3);

	// You Won
	this.text = new cjs.Text("You Won!", "30px 'Bernard MT Condensed'", "#237800");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 198;
	this.text.setTransform(149.4,115.7,1.99,1.99);

	this.text_1 = new cjs.Text("You Won!", "30px 'Bernard MT Condensed'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 198;
	this.text_1.setTransform(149.4,117.9,1.99,1.99);

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,224,43,0.929)").s().p("A3bfPMAAAg+eMAu2AAAMAAAA+eg");
	this.shape.setTransform(150,200);

	this.addChild(this.shape,this.text_1,this.text,this.restartButton);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.2,0,401.2,400);


// stage content:
(lib.CountGame = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.NumberedBox();
	this.instance.setTransform(373.5,127.9,1,1,0,0,0,23.6,23.6);

	// Layer 2
	this.instance_1 = new lib.GameoverView();
	this.instance_1.setTransform(100.8,24.3,1,1,0,0,0,100.8,24.3);

	// Layer 3
	this.instance_2 = new lib.Background();
	this.instance_2.setTransform(150,200,1,1,0,0,0,150,200);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(102.8,200,445.3,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;