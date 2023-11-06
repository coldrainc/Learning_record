function maxStr(str) {
    if (str.length <= 1) return str.length; 
    let left = 0;
    let right = 1;
    let temp;
    let max = 0;
    while (right < str.length) {
        temp = str.slice(left, right);
        if (temp.indexOf(str.charAt(right)) > -1) {
            left = left + temp.indexOf(str.charAt(right)) + 1;
            continue;
        } else {
            right++;
        }

        if (right - left > max) max = right - left;
    }
    return max;
}

console.log(maxStr('dfsxlkasd'));