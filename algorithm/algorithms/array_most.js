var arr = [1, 2, 2, 3, 5, 5, 5]
var str = 'adfasdfasdfasd';

function countChar(str) {
  var tmp = {}
  for( item of str) {
    if(!tmp[item]){
      tmp[item] = 1
    }else {
      tmp[item]++
    }
  }
  console.log(tmp)
  // return tmp;
  var result = -1;
  for(item in tmp){
    if(tmp[item] > result){
      result = tmp[item]
    }
  }
  console.log(result)
}
countChar(str)