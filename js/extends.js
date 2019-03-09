function Parent(name) {
  this.name = name;
}
function Child(test) {
  this.test = test;
  Parent.call(this, test);
}

Child.prototype = new Parent();

