
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
    console.log("This Node:")
    console.log(this.$node);
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    this.$node.css("border-radius", "20px");
    this.$node.css("border", "20px solid red");
    this.timeBetweenSteps = 3000;
    this.$node.toggle();

    //this.$node.animate({'bottom':20}, 1000);


    //this.$node.toggle();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

};
console.log(bouncyDancer1);
console.log('in bouncy new dancer');


var bouncyDancer2 = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, this.top, this.left, this.timeBetweenSteps);
};


bouncyDancer2.prototype = Object.create(Dancer.prototype);
bouncyDancer2.prototype.constructor = bouncyDancer2;
bouncyDancer2.prototype.step = function(){
    console.log(this.$node);
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    this.$node.css("border-radius", "10px");
    this.$node.css("border", "15px solid green");
    this.timeBetweenSteps = 500;
    this.$node.toggle();
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
    console.log(this.$node);
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    this.$node.css("border-radius", "25px");
    this.$node.css("border", "75px solid black");
    this.timeBetweenSteps = 10;
    this.$node.toggle();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

  };
