function testF () {
    return this;
} 
console.log(testF());
var testFCopy = testF;
console.log(testFCopy());
var testObj = {
    testObjFunc: testF
};
console.log(testObj.testObjFunc());