process.stdin.resume();
process.stdin.setEncoding('ascii');
  
var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});
  
process.stdin.on('end', function () {
    input_array = input.split("\n");
　　 //示例代码
    var len = input_array.length;
    var result = [];
    for(var i=0; i<len; i++){
        var temp = input_array[i].trim().split(' ');
        for(var j=0; j<temp.length; j++){
            if(temp[j]!=='' && result.indexOf(temp[j]) == -1){
                result.push(temp[j]);
            }
        }
    }
    console.log(result.length);
});