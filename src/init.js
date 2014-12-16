$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    //console.log("Added Node:";
    //console.log(dancer.$node);
    //dancer.$node.css("transform-origin", "100% center")
    //dancer.$node.css("animation", "circle 2s infinite")
    dancers.push(dancer);
    $('body').append(dancer.$node);



    });
  $('body').on('dblclick', function(e){
    var inc = 75;
    var timesCalled = 0;
    for(var i =0;i<dancers.length;i++){
      var xCoord = e.clientX+(inc*timesCalled);
      var yCoord = e.clientY+(inc*timesCalled);
      //console.log(xCoord,yCoord);
      dancers[i].setPosition(yCoord,xCoord);
      timesCalled++;
    }

  });
});

