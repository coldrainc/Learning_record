var testVar = "This is a variable from test mModule.js.";
var outputTestVar = function outputTestVar(name) {
  return `This is a call from ${name}.`
}
exports.testVar = testVar;
exports.outputTestVar = outputTestVar;