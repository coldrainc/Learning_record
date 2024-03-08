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
function fib1(n) {
    if (n <= 1) return n;

    return fib1(n - 1) + fib1(n - 2);
}

function fib2(n) {
    const fib = [0, 1];
    for (i = 2; i<= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

function binary(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[left] < target) {
            left = mid + 1;
        } else if (arr[right] > target) {
            right = mid - 1;
        }

        return -1;
    }
}


