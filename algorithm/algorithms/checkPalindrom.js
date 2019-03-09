// function checkPalindrom(str) {
//   console.log(`str=${str} restr=${str.split('').reverse().join('')}`)
//   return str === str.split('').reverse().join('');
// }
// // reverse 是对数组的操作， 将数组翻转
// console.log(checkPalindrom('asa'));

String.prototype.getPalindrome = function (option) {
  if (option.odd) {
    console.log(this + this.split('').reverse().slice(1).join(''));
  } else {
    console.log(this + this.split('').reverse().join(''));
  }
}

'123'.getPalindrome({ odd: true });
