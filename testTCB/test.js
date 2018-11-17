const app = require("tcb-admin-node");

app.init({
    secretId: 'AKIDWzIUWQBj8OVjeT9wTq24v6DFGFB2wU6c',
    secretKey: 'cAe3ISQErJagbWJvNfomc7sUwDPRIzb5',
    env: 'jackchen-51fdd8'
})
let db = app.database();
const topping = db.collection('topping').get();
let fn = async function test(params) {
    let result = await app.callFunction({
    name: "getTopping",

    });
    console.log(result.data)   
    return topping; 
}
fn().then(res => {
    console.log(res)
})
// fn()

// topping.get()
//     .then(res => {
//         console.log(res)
//     })