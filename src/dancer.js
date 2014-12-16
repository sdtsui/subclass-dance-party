// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<div class="dancer"></div>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  //debugger;
  // use jQuery to create an HTML <span> tag
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(this.top, this.left);
  this.step();
  //this.spin();
};
/*
Dancer.prototype.spin = function(val){
  this.$node.css("transform-origin", "100% center")
  this.$node.css("animation", "circle 2s infinite")
  console.log("Spin Called");
};
*/

Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    //{animation:circle 2s infinite;}
    //{animation: circle 2s infinite linear;}

    var context = this;
    setTimeout(function(){
      context.step();
    }, this.timeBetweenSteps);

};

Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};
