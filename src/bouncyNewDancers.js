
var bouncyDancer1 = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, this.top, this.left, this.timeBetweenSteps);
};


bouncyDancer1.prototype = Object.create(Dancer.prototype);
bouncyDancer1.prototype.constructor = bouncyDancer1;
bouncyDancer1.prototype.step = function(){
    //console.log("This Node:")
    //console.log(this.$node);
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    //this.$node.css("border-radius", "20px");
    //this.$node.css("border", "20px solid red");
    this.$node.animate({height: '30px'});
    this.$node.animate({width: '-25px'});
    this.$node.animate({width: '20px'});
    this.$node.animate({height: '30px'});
    this.$node.css("background-color", "red");

    //this.timeBetweenSteps = 3000;
    //this.$node.toggle();

    //this.$node.animate({'bottom':20}, 1000);


    //this.$node.toggle();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

};
//console.log(bouncyDancer1);
//console.log('in bouncy new dancer');


var bouncyDancer2 = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.colors = ["green", "blue", "red", "white", "black"];
  this.idx = 0;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, this.top, this.left, this.timeBetweenSteps);
};


bouncyDancer2.prototype = Object.create(Dancer.prototype);
bouncyDancer2.prototype.constructor = bouncyDancer2;
bouncyDancer2.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    this.$node.css("border-radius", "1px");
    //this.$node.css("border", "15px solid "+ this.colors[i] +"\"");
    this.$node.css("border", "10px solid " + this.colors[this.idx]);

    if (this.idx === this.colors.length-1){
     this.idx = 0;
    }else{this.idx++};
    //this.$node.animate({height: "10px"}});
    //this.$node.animate({height: "-10px"}});


    this.timeBetweenSteps = 500;
    //this.$node.toggle();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

  };

var bouncyDancer3 = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, this.top, this.left, this.timeBetweenSteps);
};


bouncyDancer3.prototype = Object.create(Dancer.prototype);
bouncyDancer3.prototype.constructor = bouncyDancer3;
bouncyDancer3.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    this.$node.css("border-radius", "none");
    this.$node.css("border", "100px outset white");
    //this.$node.css("background-image", "url(" + "http://cdn.hiphopwired.com/wp-content/uploads/2011/08/biggie.jpg" + ")");
    this.timeBetweenSteps = 10;
    //this.$node.toggle();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

  };
var MovingDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, this.top, this.left, this.timeBetweenSteps);
};


MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
MovingDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    //this.$node.css("background-image", "url(" + "http://cdn.hiphopwired.com/wp-content/uploads/2011/08/biggie.jpg" + ")");
    this.timeBetweenSteps = 10;
    //this.$node.toggle();
    this.setPosition(this.top-Math.random(),this.top+Math.random());
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

  };
