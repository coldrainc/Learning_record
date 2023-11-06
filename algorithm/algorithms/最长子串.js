function maxStr(arr) {
    const dp = new Array(str.length).fill(1);
    for (let i = 1; i < str.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

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


