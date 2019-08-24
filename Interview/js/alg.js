let line = '58 4 163'
let lines = line.split(' ');
let n = parseInt(lines[0]), s = parseInt(lines[1]), l = parseInt(lines[2]), result = 0, total = 0, length = 0;
var single = Math.floor(l / (s + 1));
if (single % 13 === 0) single--;
if (s === l) single = 1;
 
var res = Math.ceil(n / single)
 
if (res === 1 && n % 13 === 0) res++;
 
console.log(res)
