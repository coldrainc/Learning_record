var m= 1, j = k = 0; 
    function add(n) { 
        return n = n+1; 
　 } 
    y = add(m); 
    function add(n) {  // 函数变量提升，后面的覆盖前面的
        return n = n + 3; 
    } 
z = add(m); 

console.log(y, z)  // 4, 4