var data = [];

for(var i = 0; i < 3; i++) {
  data[i] = (function(i) {
    return function() {
      console.log(i)
    }
  })(i)
}
for(var i = 0; i < 5; i++){
  setTimeout((function(i){
    return function(){
      console.log(i)
    }
  })(i), 1000)
}
// (function(){})()在里面的函数将会立即执行， 当需要赋值的时候使用函数然后返回一个需要的东来使用闭包 

let arr = [1, 2, 3, 4];
// 当结构不成功时，相当于声明了一个变量，但是没有赋值
let [a, ...b] = arr; // 使用了let就不能再次声明所以下面声明a将会报错
console.log(a, b, c);

var a = 1, b = 2;
console.log(`a=${a}-b=${b}`);
[a, b] = [b, a];
console.log(`a=${a}-b=${b}`);