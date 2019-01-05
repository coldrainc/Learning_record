
console.log("100"== 100) // 100 转为 "100"
console.log('' == 0) // 0 转为false
console.log(10 && 0)

let a = 1;
function foo() {
  console.log(this.a);
}

foo()
console.log([] == ![])



function deepCopy(obj) {
  if(typeof(obj) !== 'object') {
    return null
  }
  newObj = obj instanceof Array ? [] : {};
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      newObj = typeof(abj[key]) === 'object' ? deepCopy(obj) : obj;
    }
  }
  return newObj
}