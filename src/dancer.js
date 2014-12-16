// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<div class="dancer elvis"></div>');
/*
  .on('mouseover', function(){
    this.toggleClass("dancer");
    this.toggleClass
    background-image: url("http://images2.fanpop.com/images/photos/6700000/Dancing-elvis-presley-6775623-236-260.gif") ;
    });
*/
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
  this.addMouseOver();
};
/*
Dancer.prototype.spin = function(val){
  this.$node.css("transform-origin", "100% center")
  this.$node.css("animation", "circle 2s infinite")
  console.log("Spin Called");
};
*/

/*
Dancer.prototype.randomMovement = function(){

}
*/
Dancer.prototype.addMouseOver = function(){
  this.$node.on('mouseover', function(){
    this.toggleClass("elvis");
    this.toggleClass("biebs");
  })
}
Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    //{animation:circle 2s infinite;}
    //{animation: circle 2s infinite linear;}

    var context = this;
    setTimeout(function(){
      var polarity = [-1,1]
      var bound = [12,15,18,45,55];
      dir1 = polarity[Math.floor(Math.random()*polarity.length-1)];
      dir2 = polarity[Math.floor(Math.random()*polarity.length-1)];
      mag1 = bound[Math.floor(Math.random()*bound.length-1)];
      mag2 = bound[Math.floor(Math.random()*bound.length-1)];
      context.setPosition(context.top+(dir1*mag1), context.left+(dir2*mag2));
      context.step();

      //console.log(dir1);
      //console.log(mag1);
      //console.log(dir2);
      //console.log(mag2);

      //context.setPosition(context.top)
    }, this.timeBetweenSteps);

};
Dancer.prototype.lineUp = function(){
  console.log("calling lineup!");
}

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
