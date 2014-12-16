describe("bouncyDancer1", function() {

  var bouncyDancerTest;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    //debugger;
    //console.log("something");
    bouncyDancerTest = new bouncyDancer1(10, 20, timeBetweenSteps);
    console.log("BouncyDancerTest:");
    console.log(bouncyDancerTest.$node);
  });

  it('test something',function(){
    expect(2).to.equal(2);
  })

  it("should have a jQuery $node object", function(){
    //debugger;
    expect(bouncyDancerTest.$node instanceof jQuery).to.be.equal(true);
    expect(bouncyDancerTest.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(bouncyDancerTest.$node, 'toggle');
    bouncyDancerTest.step();
    expect(bouncyDancerTest.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(bouncyDancerTest, "step");
      //debugger;

      expect(bouncyDancerTest.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncyDancerTest.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancerTest.step.callCount).to.be.equal(2);
    });
  });
});
