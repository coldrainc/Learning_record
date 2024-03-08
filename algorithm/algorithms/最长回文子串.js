function longest(s) {
    if (!s) return '';

    let str = s[0];

    function expendCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        return s.slice(left, right + 1);
    }

    for (let i = 0; i < s.length; i++) {
        const tmp1 = expendCenter(i, i);
        if (tmp1.length > str.length) str = tmp1;
        const tmp2 = expendCenter(i, i + 1);
        if (tmp2.length > str.length) str = tmp2;
    }

    return str;
}