/**
 * Step --> 1
 Tokenization
 ++++++++++++
 function --> keyword
 sayName --> function name
 () { --> Defining function
 var ---> keyword
 name --> variable name
 "someName" --> variable value string

 Step --> 2
 AST(Avstract Syntax Tree)

 Step --> 3
 Machine Code

 Step --> 4
 If JavaScript Code Then Run Browser
 else Node.js Then Run Node.js Run Time Environment

 step --> 5
 Lexical Environment
 OR
 Lexical Context
 */

function sayName() {
  var name = "someName";
  console.log("The name is " + name);
}
