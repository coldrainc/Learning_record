let A = {
  a: 1,
  b: 2,
  c: () => {
    console.log(this.a, this) // undefined this = window
  },
  d: function() {
    console.log(this.a, this); // 1 this = A
  }
}
A.c();
A.d();