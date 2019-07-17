let str,str1, n, line, x, y;
str = readline();
n = readline();
str = str.split('');
while (parseInt(n) > 0) {
    line = readline();
    x = parseInt(line.split(' ')[0]);
    y = parseInt(line.split(' ')[1]);
    str1 = str.slice(x, x+y).reverse();
    // str.splice(x+y, 0, str1);
    str.splice(x+y, 0, ...str1) // 这里要注意， splice参数传递是在后面一个一个参数添加，这里由于str1是数组，所以要展开
    n--;
}
print(str.join(''));