var name = "Tom";

function tom() {
  console.log(this.name + "Runs");
}

// invoke the function tom()
tom();
/*
Global Execution Context(GEC)
1. Creation Phase
    -> window: global object
    -> this: window
    -> name & tom() allocation memory
    -> name: undefined
    -> tom(): [memory location number]
2. Execution Phase
    -> assign value "Tom" to name vairable
    ->tom(): Execution
    -> FEC(From tom())
        1. Creatation Phase
            -> skip(variable & function defined)
        2. Execution Phase
            -> log() from console() -> log() is a function so again FEC
            -> FEC(From console.log())
                1. Creation Phase
                2. Execution Phase
                    -> output

in javascript engine:
All code tracking in execution context stack or call stack
*/
