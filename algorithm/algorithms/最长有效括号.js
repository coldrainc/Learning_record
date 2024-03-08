function maxLen(str) {
    let stack = [];
    let len = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i)
            }
        }
    }
}

