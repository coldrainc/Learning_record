// function CoolMoudle () {
//     var something = "cool";
//     var another = [1, 2, 3];

//     function doSomething () {
//         console.log(something)
//     }

//     function doAnother () {
//         console.log(another.join("!"));
//     }

//     return {
//         doSomething : doSomething,
//         doAnother : doAnother
//     };
// }

// var foo = CoolMoudle();

// foo.doAnother();
// foo.doSomething();

var foo = (function CoolMoudle(id) {
    function change () {
        publicAPI.identify = identify2;
    }

    function identify1 () {
        console.log(id);
    }

    function identify2 () {
        console.log(id.toUpperCase);
    }

    var publicAPI = {
        change : change,
        identify : identify1
    };

    return publicAPI;
})("foo moudle");

foo.identify();
foo.change();
foo.identify();