var empty_object = {};
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};
var flight = {
    airline: "Oceanic",
    departure:{
        IATA: "SYD",
        time: "2018/09/29",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2018/09/29",
        city: "Los Angeles"
    }
};
console.log(flight);
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;

