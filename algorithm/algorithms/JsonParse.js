var obj2 = {};
let count = 0;
var obj = [
  {id:1, parent: null},
  {id:2, parent: 1},
  {id:3, parent: 2},
  {id:4, parent: 3}
];
function JsonParse(obj, arr, i) {
  count++;
  if (i >= arr.length) return;
  if (arr[i].parent) { // child
    if (!obj.child) {
      obj.child = {
        id: arr[i].id,
        parent: arr[i].parent,
      }
      JsonParse(obj.child, arr, i+1);
    }
  } else {
    obj.obj = {
      id: arr[i].id,
      parent: arr[i].parent,
    };
    JsonParse(obj.obj, arr, i+1)
  }
  return obj;
}

// JsonParse(obj2, obj, 0);
// console.log(obj2);
console.log(JsonParse(obj2, obj, 0));
console.log(count);
