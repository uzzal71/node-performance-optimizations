console.log("Inside global execution context");
var a = 5;
function testMe() {
  console.log("Inside testMe execution context");
  var b = 10;

  var user = {
    name: "Uzzal",
    country: "Bangladesh",
  };

  function testAgain() {
    console.log("Inside testAgain execution context");
    console.log("Existing testAgain execution");
  }

  testAgain();
  console.log("Existing testMe execution context");
}
testMe();
console.log("Existing global execution context");

Step: 01
Global Execution Context
1. Creation Phase
    -> window: global object
    -> this: window
    -> a & testMe alocation memory
    -> a: undefined
    -> testMe(): f() in memory
2. Execution Phase
    -> Assign value 5 to a variable
    -> testMe(): Execution
    -> FEC(For testMe())
        1. Creation Phase
            -> window: global object
            -> this: window
            -> b, user, testAgain alocation memory
            -> b: undefined
            -> user: undefined
            -> testAgain(): f() in memory
        2. Execution Phase
            -> assign value 10 to b variable
            -> user assign a value
            -> testAgain(): Execution
            -> FEC(Fom testAgain())
                1. Creation Phase
                2. Execution Phase

Function Execution Stack / Call Stack: 
1. Call Stack(LIFO)
GEC:
    1. Creation Phase
    -> a: unfined
    -> testMe: xa01
    2. Execution Phase
        -> a: 5
        -> testMe(): Execution
        -> FEC
            1. Creation Phase
            -> b: undefined
            -> user: undefined
            -> testAgain: z987
            2. Execution Phase
                -> b: 10
                -> user: 0X76
                -> testAgain: z987
2. Heap(Describe Memory)
    -> testMe(): xa01
    -> testAgain(): z987
    -> user: 0X76