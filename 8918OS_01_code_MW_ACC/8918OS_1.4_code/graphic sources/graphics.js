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



(lib.Box = function() {
	this.initialize();

	// Gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjqjqIHVAAIAAHVInVAAg");
	this.shape.setTransform(23.6,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.471)"],[0,1],-2.5,-8,0,-2.5,-8,36.3).s().p("AjqDrIAAnVIHVAAIAAHVg");
	this.shape_1.setTransform(23.6,23.6);

	// Color Tint
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFED00").s().p("AjqDrIAAnVIHVAAIAAHVg");
	this.shape_2.setTransform(23.6,23.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,49.2,49.2);


(lib.NumberedBox = function() {
	this.initialize();

	// Number Text
	this.numberText = new cjs.Text("99", "bold 30px 'Museo Sans Rounded 1000'");
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
p.nominalBounds = new cjs.Rectangle(-1,-0.5,49,49.6);


// stage content:
(lib.CountGame = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.NumberedBox();
	this.instance.setTransform(120.4,127.9,1,1,0,0,0,23.6,23.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(245.8,303.8,49,49.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;