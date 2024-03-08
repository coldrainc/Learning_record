// function calcArr(arr, target) {
//     const newArr = arr.sort((a, b) => a - b);
//     let result = [];
//     function track(tmpArr, total) {
//         if (total === target) {
//             result.push(tmpArr);
//         } else if (total > target) {
//             return;
//         } else {
//             for (let i = 0; i < newArr.length; i++) {
//                 track([...tmpArr, newArr[i]], total + newArr[i]);
//             }
//         }
//     }

//     track([], 0);

//     return result;
// }

// console.log(calcArr([2,3,6,7], 7));

function calc() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
        if (i === 9) {
            return i;
        }
    }

    console.log('tests');
}

calc();