function Player () {
    this.a = "test";
    this.isAvailable = function (){
        return "Instance method says - he is hired";
    }
}
Player.prototype.isAvailable = function () {
    return "Prototype method says - he is Not hired";
};

var crazyBob = new Player();
console.log(crazyBob.a);
console.log(crazyBob.isAvailable());