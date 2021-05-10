(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Aurora_animate_HTML5 Canvas_atlas_1", frames: [[0,63,366,51],[0,0,366,61]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Aurora_animate_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Aurora_animate_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.WarpedAsset_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("AnBZyMAAAgzjIODAAMAAAAzjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-165,90,330);


(lib.StageOutline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(3,1,1).p("EgV3gjJMArvAAAMAAABGTMgrvAAAg");
	this.shape.setTransform(140,225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(115,58,33,0)").s().p("EgV3AjKMAAAhGTMArvAAAMAAABGTg");
	this.shape_1.setTransform(140,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,283,453);


(lib.ButtonOne = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(48.5,19.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(48.5,22.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

	// ButtonBG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AzXFeQigAAAAigIAAl7QAAigCgAAMAmvAAAQCgAAAACgIAAF7QAACgigAAg");
	this.shape.setTransform(140,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3366").s().p("Ax/FFQiUAAAAiVIAAlfQAAiVCUAAMAj+AAAQCVAAAACVIAAFfQAACViVAAg");
	this.shape_1.setTransform(140,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AzXolMAmvAAAQCgAAAACgIAAMLQAACgigAAMgmvAAAQigAAAAigIAAsLQAAigCgAAg");
	this.shape_2.setTransform(139.5,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AzXImQigAAAAigIAAsLQAAigCgAAMAmvAAAQCgAAAACgIAAMLQAACgigAAg");
	this.shape_3.setTransform(139.5,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-12,283,113);


(lib.Ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("Am5G6Qi3i3AAkDQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECQAAEDi3C3Qi3C3kDAAQkCAAi3i3g");
	this.shape.setTransform(62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.PuppetShape_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("Am/AUQgQxjgDonQEZgHCvABQD/AADBANQgIIrAVRLQAWRSgHIcQlGgDo5AMQgCoygQw4g");
	this.shape.setTransform(-1.914,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-166,93.6,332.3);


(lib.PuppetShape_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("AArZ4QkQgFi0ABQAjtHgYsWQgZsWhVs2QD3AEDLgRQDKgQDqgsQBiL0AYOGQAVL2geONInAgHg");
	this.shape.setTransform(-4.1926,-0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-166.7,101.80000000000001,332.6);


(lib.PuppetShape_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("AoRAAQAnuyCbrQQDLAzDpAjQB+ASE9AlQiKLHglNZQgZJKAQQNQi2gFkLACInDAEQgKyGAVn9g");
	this.shape.setTransform(8.9387,-1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-167.7,108.8,333.4);


(lib.PuppetShape_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("ABwaVQkugNiRAAQAcqKAEiqQAMnCgQlRQgptUj7qNQEjhGCLgmQDuhBC6hUQEbLLAyPdQATF8gMHjQgFDmgbJWQicgBkngMg");
	this.shape.setTransform(-11.0464,-3.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-173.2,120,339.6);


(lib.PuppetShape_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("AiXZ0InIAIQAKjoAGpOQAHoSASkwQAanOBHl4QBSm/CZmHQDFBqDjBBQCGAmEcBEQh/FKhEGFQg7FKgXGlQgPEOgJIBQgIIvgLEAQjFgUjygBg");
	this.shape.setTransform(15.25,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("Ag4ZeQitgCkZAFQASlXAHngQAHoeAEkOQARvZBeqZQDsBJDMATQCRAOEhgHQg+JogWPAQgGELgKIcQgKHjgOFUQjSgTjpgEg");
	this.shape_1.setTransform(5.75,2.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AATZnQjqgHjYADQAtt7gNrZQgOsrhYsJQEJAMC1gRQDCgRDug/QBxLcALOdQAIJggqQbQkIgNi4gGg");
	this.shape_2.setTransform(-1.761,1.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-166.4,128.1,334.70000000000005);


(lib.PuppetShape_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("ADMaYQj2gEjEAIQAKohAAkHQACnCgdlCQgkmUhblPQhpl8i7lMQBwg2Eqh2QELhrCWhRQF9LOBlPfQAoGLAAHZQAAFPgYHnIm/gMg");
	this.shape.setTransform(-20.0997,-2.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("AB4Z6QjfgDjfAKQAPoxACj8QADm2gTlXQgwtGjXq1QEvgyCHgfQDdgzDNhUQDvLiA4OzQAmJ/gqQFQj7gQjEgDg");
	this.shape_1.setTransform(-11.7781,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AAYZUQjLgDj3ANQAfsvgSseQgQrlg+tfQEDAaC8gMQC6gMD4g4QBSMAAQNoQAOLpghOCQjmgUjXgCg");
	this.shape_2.setTransform(-2.1687,4.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9966").s().p("Ag5ZbQimgBkgAMQAPlNAEnpQADodAEkOQAPvMBtqrQDqBODOAWQCKAPEogCQhOJugSOxQgGEIgGIZQgIHngNFNQjUgWjlgCg");
	this.shape_3.setTransform(5.95,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.6,-172.8,144.8,341.3);


(lib.PuppetShape_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("ArPakQgbrJgBhnQgFn4AzmEQCMwhJjp6QB9CSDuCoQCKBiAmAdQBfBJBABEQkMDhiMFOQh4EdgnGPQgcEcAHHfQAJKOgDCKQiTgEkdAMQkRALiTAAIghAAg");
	this.shape.setTransform(26.6027,-2.567);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("AqWNuQgHn3AdlqQBTv1Gwq4QC0CfDTBeQBAAdB/AwQCGAzBJAgQjEEohlFwQhXE7gbGaQgTEgAGHjQAIJ/gCClQi0gMkAAJInHASQgNoXgEkbg");
	this.shape_1.setTransform(19.1319,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AorNYQgHoEALk/QAgvNDkrTQDpCCC7AoQBuAXE/ATQi0KFgdNzQgKEtAEHnQAEKTgBCaQjKgRjuAGQhFACmCATQACi7gIp5g");
	this.shape_2.setTransform(9.6507,0.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9966").s().p("AnBAHQgMwFAPpjQEMA/CtAAQCiAAEQg6QAjZEgMZ3QjegSjgACQi4ACkJARQAGnlgMx2g");
	this.shape_3.setTransform(-0.4713,4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9966").s().p("ABwZ6QjagBjjANQAHp+AAiwQAAm/gRlTQgstZi5q2QEigbCWgeQDRgrDahcQDSLiAyO0QATF2gBHSQgBEJgMIsQj1gPjLgBg");
	this.shape_4.setTransform(-10.9696,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-172.5,169.60000000000002,340.9);


(lib.PuppetShape_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("AD7aVQkygHiNAEQARpuAAjFQgBm2gmlCQgvmEhwk+Qh9lkjakwQB9hQEMiEQEPiFB8hQQHTKLCDPwQAzGOAEHjQACFUgXHuQhIADhlAAQh2AAiegEg");
	this.shape.setTransform(-24.713,-3.4615);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("AC3aHQkLgEi0AIQANpCgBj0QAAm2gelNQhIsxkjp7QGTh3AUgGQDdhLC6hqQFUKtBWPTQAhF3ABHiQABDhgMJfQg4AAmLgGg");
	this.shape_1.setTransform(-18.0962,-1.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AlnAwQgtsziarQQEhgFCVgaQC5ghDphnQDFK/AuO1QARFeABHkQAAEWgCInQkggJijgBQjtAAjVAMQAVvSgkp5g");
	this.shape_2.setTransform(-10.3708,0.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9966").s().p("AnBAAQgXwlALosQEVBCCfgDQCXgDEVhIQApKlAKOpQAGIaAGRLQjkgMjeACQjFACj/APQALotgYwwg");
	this.shape_3.setTransform(-1.4639,4.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9966").s().p("AoBNEQgIomADkVQAOvGCtq+QD7B5CpAZQB6ARE1gQQh1KlgSNnQgHFJAEHPQADEMAIIpQjOgOjvAGQhkACljASQADkSgJong");
	this.shape_4.setTransform(5.449,1.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9966").s().p("ApdNeQgJoAASlSQAzvgFPq/QDSCaC/A9QBMAYBzAXIDjAtQiSFKhMF/QhCFLgUGbQgPEvAHHaIALMtQi8gNj7AJQiSAFk2AOQAAhQgOrmg");
	this.shape_5.setTransform(13.7359,-0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9966").s().p("AqrNuQgIn5AilwQBewAHiqlQCmCiDXBtQD3BvCLBLQjYEWhwFmQhgEzgdGTQgWEiAIHeQALKagBCKQiqgKkJALQl1AQhTAAQgQoVgFkdg");
	this.shape_6.setTransform(20.79,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.8,-172.3,186.2,340.4);


(lib.PuppetShape_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("AnBZyMAAAgzjIODAAMAAAAzjg");
	this.shape.setTransform(0.025,0.1375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("AAnZ7QkIgBi5ACQAGxNgJobQgQuAg8rRIG/gbQD/gQDAgTQBBLTAPOqQAHGbgDTgInCgCg");
	this.shape_1.setTransform(-3.8421,-0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("ABNaDQkQgBiwADQAKxbgSoCQgftvh4rBIG7g2QD8ghC+glQCELTAgO0QAMFqAAHcIgDM8InDgCg");
	this.shape_2.setTransform(-7.625,-1.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9966").s().p("ABzaKQkWgCiqAEQAHpOAAjqQgBnBgSlaQgttei1qsIG2hTQD8gyC3g2QDJLOAxO/QATFwAAHeQABCZgGKlIg9AAQh/AAkHgDg");
	this.shape_3.setTransform(-11.3481,-2.2639);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9966").s().p("ACXaQQkbgEilAEQAKpcAAjaQgBm/gXlTQg7tOjwqSIGuhzQD/hECshDQENLEBDPMQAbF2ABHgQAADhgJJdIhVABQiEAAjqgDg");
	this.shape_4.setTransform(-14.8737,-2.8295);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9966").s().p("AC6aTQkigFidAFQAMpnAAjPQgBm8gdlMQhHs+kqp3QBcgkFIhvQEBhXCghMQFQK1BYPYQAiF+ACHhQABESgOItIh4ACQiCAAjIgEg");
	this.shape_5.setTransform(-18.3216,-3.1971);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9966").s().p("ADbaVQksgGiTAEQAOpvAAjEQAAm6gilHQhUsulhpYQB1g7Ejh4QEHhtCPhQQGTKhBsPlQArGFACHiQACE3gSIKQhBABhcAAQh7AAiqgDg");
	this.shape_6.setTransform(-21.5942,-3.4036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-172.2,137.1,337.7);


(lib.补间6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Ball("synched",0);
	this.instance.setTransform(0,0.1,1.152,1.152,0,0,0,62.5,62.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AJxAAQAAEDi3C3Qi3C3kDAAQkCAAi3i3Qi3i3AAkDQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECg");
	this.shape.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-72,144,144);


(lib.补间5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Ball("synched",0);
	this.instance.setTransform(0,0.1,1.152,1.152,0,0,0,62.5,62.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AJxAAQAAEDi3C3Qi3C3kDAAQkCAAi3i3Qi3i3AAkDQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECg");
	this.shape.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-72,144,144);


(lib.补间4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Ball("synched",0);
	this.instance.setTransform(0,0.1,1.152,1.152,0,0,0,62.5,62.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AJxAAQAAEDi3C3Qi3C3kDAAQkCAAi3i3Qi3i3AAkDQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECg");
	this.shape.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-72,144,144);


(lib.补间3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Ball("synched",0);
	this.instance.setTransform(0,0.1,1.152,1.152,0,0,0,62.5,62.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AJxAAQAAEDi3C3Qi3C3kDAAQkCAAi3i3Qi3i3AAkDQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECg");
	this.shape.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-72,144,144);


(lib.补间2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Ball("synched",0);
	this.instance.setTransform(0,0.1,1.152,1.152,0,0,0,62.5,62.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AJxAAQAAEDi3C3Qi3C3kDAAQkCAAi3i3Qi3i3AAkDQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECg");
	this.shape.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-72,144,144);


(lib.补间1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Ball("synched",0);
	this.instance.setTransform(0,0.1,1.152,1.152,0,0,0,62.5,62.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AJxAAQAAEDi3C3Qi3C3kDAAQkCAAi3i3Qi3i3AAkDQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECg");
	this.shape.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-72,144,144);


(lib.Rectangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.PuppetShape_3("synched",1,false);
	this.instance.setTransform(45,165);

	this.instance_1 = new lib.PuppetShape_20("synched",1,false);
	this.instance_1.setTransform(45,165);

	this.instance_2 = new lib.PuppetShape_21("synched",1,false);
	this.instance_2.setTransform(45,165);

	this.instance_3 = new lib.PuppetShape_22("synched",1,false);
	this.instance_3.setTransform(45,165);

	this.instance_4 = new lib.PuppetShape_23("synched",1,false);
	this.instance_4.setTransform(45,165);

	this.instance_5 = new lib.PuppetShape_24("synched",1,false);
	this.instance_5.setTransform(45,165);

	this.instance_6 = new lib.PuppetShape_25("synched",1,false);
	this.instance_6.setTransform(45,165);

	this.instance_7 = new lib.PuppetShape_26("synched",1,false);
	this.instance_7.setTransform(45,165);

	this.instance_8 = new lib.PuppetShape_27("synched",1,false);
	this.instance_8.setTransform(45,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},6).to({state:[]},1).to({state:[{t:this.instance_2}]},6).to({state:[]},1).to({state:[{t:this.instance_3}]},4).to({state:[]},1).to({state:[{t:this.instance_4}]},3).to({state:[]},1).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-8.2,198.2,341.5);


(lib.补间25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Rectangle("synched",26);
	this.instance.setTransform(11.05,3.45,1,1,0,0,0,45,165);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(115,58,33,0)").ss(1,1,1).p("AnB5xIODAAMAAAAzjIuDAAg");
	this.shape.setTransform(11.05,3.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-169.8,120,339.6);


(lib.补间24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Rectangle("synched",23);
	this.instance.setTransform(-15.25,-0.9,1,1,0,0,0,45,165);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(115,58,33,0)").ss(1,1,1).p("AnB5xIODAAMAAAAzjIuDAAg");
	this.shape.setTransform(-15.25,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.2,-167.3,122,334.70000000000005);


(lib.补间23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Rectangle("synched",19);
	this.instance.setTransform(20.1,2.85,1,1,0,0,0,45,165);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(115,58,33,0)").ss(1,1,1).p("AnB5xIODAAMAAAAzjIuDAAg");
	this.shape.setTransform(20.1,2.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-170,135,340);


(lib.补间22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Rectangle("synched",14);
	this.instance.setTransform(-82.9,2.6,1,1,0,0,0,45,165);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(115,58,33,0)").ss(1,1,1).p("AnB5xIODAAMAAAAzjIuDAAg");
	this.shape.setTransform(86.1,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.1,-169.9,263.2,340.5);


(lib.补间21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Rectangle("synched",7);
	this.instance.setTransform(24.75,3.45,1,1,0,0,0,45,165);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(115,58,33,0)").ss(1,1,1).p("AnB5xIODAAMAAAAzjIuDAAg");
	this.shape.setTransform(24.75,3.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-168.9,144.1,338.4);


(lib.补间20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Rectangle("synched",0);
	this.instance.setTransform(0,-0.05,1,1,0,0,0,45,165);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(115,58,33,0)").ss(1,1,1).p("AnB5xIODAAMAAAAzjIuDAAg");
	this.shape.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-166,92,332);


// stage content:
(lib.Aurora_animate_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {StartSquash:1,StartAnticipation:20,StartFollowThru:55};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,19,54,85];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.StartFollowThru.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并继续从该帧播放。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndPlay('StartFollowThru');
		});
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.StartAnticipation.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并继续从该帧播放。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndPlay('StartAnticipation');
		});
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.StartSquash.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并继续从该帧播放。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndPlay('StartSquash');
		});
	}
	this.frame_19 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
	}
	this.frame_54 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
	}
	this.frame_85 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(35).call(this.frame_54).wait(31).call(this.frame_85).wait(1));

	// ButtonThree
	this.StartFollowThru = new lib.ButtonOne();
	this.StartFollowThru.name = "StartFollowThru";
	this.StartFollowThru.setTransform(861,568.95);
	new cjs.ButtonHelper(this.StartFollowThru, 0, 1, 2, false, new lib.ButtonOne(), 3);

	this.timeline.addTween(cjs.Tween.get(this.StartFollowThru).wait(86));

	// ButtonTwo
	this.StartAnticipation = new lib.ButtonOne();
	this.StartAnticipation.name = "StartAnticipation";
	this.StartAnticipation.setTransform(489,568.95);
	new cjs.ButtonHelper(this.StartAnticipation, 0, 1, 2, false, new lib.ButtonOne(), 3);

	this.timeline.addTween(cjs.Tween.get(this.StartAnticipation).wait(86));

	// ButtonOne
	this.StartSquash = new lib.ButtonOne();
	this.StartSquash.name = "StartSquash";
	this.StartSquash.setTransform(120.65,568.95);
	new cjs.ButtonHelper(this.StartSquash, 0, 1, 2, false, new lib.ButtonOne(), 3);

	this.timeline.addTween(cjs.Tween.get(this.StartSquash).wait(86));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAj8AjKMAAAhGTMArwAAAMAAABGTgEgWLAjKMAAAhGTMArvAAAMAAABGTgEhPrAjKMAAAhGTMArwAAAMAAABGTg");
	mask.setTransform(631,320);

	// FollowThru
	this.instance = new lib.补间20("synched",0);
	this.instance.setTransform(1005,379.55);
	this.instance._off = true;

	this.instance_1 = new lib.补间21("synched",0);
	this.instance_1.setTransform(1060.25,376.05);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间22("synched",0);
	this.instance_2.setTransform(998.9,374.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间23("synched",0);
	this.instance_3.setTransform(1064.9,376.65);
	this.instance_3._off = true;

	this.instance_4 = new lib.补间24("synched",0);
	this.instance_4.setTransform(935.25,377.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间25("synched",0);
	this.instance_5.setTransform(1073.95,376.05);

	this.instance_6 = new lib.Rectangle("synched",27);
	this.instance_6.setTransform(915,379.5,1,1,0,0,0,45,165);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(115,58,33,0)").ss(1,1,1).p("AnB5xIODAAMAAAAzjIuDAAg");
	this.shape.setTransform(915,379.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},55).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.shape,p:{x:915,y:379.5}},{t:this.instance_6,p:{x:915,startPosition:27,y:379.5}}]},1).to({state:[{t:this.instance_6,p:{x:1085,startPosition:28,y:379.5}},{t:this.shape,p:{x:1085,y:379.5}}]},1).to({state:[{t:this.shape,p:{x:1010,y:379}},{t:this.instance_6,p:{x:1010,startPosition:29,y:379}}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({_off:true,x:1060.25,y:376.05},7).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},7).to({_off:true,x:998.9,y:374.9},7).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(62).to({_off:false},7).to({_off:true,x:1064.9,y:376.65},5).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},5).to({_off:true,x:935.25,y:377.9},4).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},4).to({_off:true,x:1073.95,y:376.05},3).wait(5));

	// Anticipation
	this.instance_7 = new lib.补间6("synched",0);
	this.instance_7.setTransform(630,472.95,0.9722,1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.1172,scaleY:0.6037,x:630.05,y:501},3).wait(1).to({regY:0.2,rotation:-14.9993,x:620.05,y:497.95},0).wait(1).to({regY:0.3,rotation:14.9997,x:638,y:497},0).wait(1).to({regY:0.1,rotation:0,x:630.05,y:501},0).to({regY:0.2,scaleX:0.8401,scaleY:1.0942,x:630.15,y:278.5},6).to({regX:0,regY:0,scaleX:0.9722,scaleY:1,x:630,y:166.95},3).to({regX:0.1,regY:0.1,scaleY:0.5907,x:630.05,y:138},2).to({scaleX:0.7014,scaleY:1.0057,x:629.95,y:349.95},6).to({regX:0,regY:0,scaleX:0.9722,scaleY:1,x:630,y:472.95},3).to({regX:0.4,regY:0.2,scaleX:1.1134,scaleY:0.5747,y:503.95},3).to({regX:0.5,regY:0.4,scaleX:0.9734,scaleY:1.1131,y:430.05},2).wait(1).to({regX:0.6,scaleY:0.7672,x:630.05,y:490},0).wait(1).to({regX:0.8,regY:0.5,scaleX:0.9634,scaleY:0.973,x:630.15,y:460.05},0).wait(1).to({regX:0.6,scaleX:0.9734,scaleY:0.9738,x:630,y:475.05},0).wait(32));

	// SquashAndStretch
	this.instance_8 = new lib.补间1("synched",0);
	this.instance_8.setTransform(260,39.95,0.7014,1.2441);
	this.instance_8._off = true;

	this.instance_9 = new lib.补间2("synched",0);
	this.instance_9.setTransform(260.1,501.05,0.9786,0.6035,0,0,0,0.1,0.1);
	this.instance_9._off = true;

	this.instance_10 = new lib.补间3("synched",0);
	this.instance_10.setTransform(261,319.95,0.7082,1);
	this.instance_10._off = true;

	this.instance_11 = new lib.补间4("synched",0);
	this.instance_11.setTransform(260,490.95,1,0.7424);

	this.instance_12 = new lib.补间5("synched",0);
	this.instance_12.setTransform(260,430,0.8333,1);

	this.instance_13 = new lib.补间6("synched",0);
	this.instance_13.setTransform(260,481.95,1,0.8743);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13,p:{scaleX:1,scaleY:0.8743,y:481.95}}]},1).to({state:[{t:this.instance_13,p:{scaleX:0.9162,scaleY:1,y:450}}]},1).to({state:[{t:this.instance_13,p:{scaleX:0.9722,scaleY:1,y:473}}]},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true,regX:0.1,regY:0.1,scaleX:0.9786,scaleY:0.6035,x:260.1,y:501.05},8).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},8).to({_off:true,regX:0,regY:0,scaleX:0.7082,scaleY:1,x:261,y:319.95},3).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},3).to({_off:true,scaleX:1,scaleY:0.7424,x:260,y:490.95},3).wait(71));

	// Stages
	this.instance_14 = new lib.StageOutline("synched",0);
	this.instance_14.setTransform(260.65,320,1,1,0,0,0,140,225);

	this.instance_15 = new lib.StageOutline("synched",0);
	this.instance_15.setTransform(1000.65,319.8,1,1,0,0,0,140,225);

	this.instance_16 = new lib.StageOutline("synched",0);
	this.instance_16.setTransform(628.2,320,1,1,0,0,0,140,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(86));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(758.7,453.3,383.5,216.7);
// library properties:
lib.properties = {
	id: 'BBBF8EA2BBFB28459C0A341B97E2E597',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Aurora_animate_HTML5 Canvas_atlas_1.png", id:"Aurora_animate_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BBBF8EA2BBFB28459C0A341B97E2E597'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;