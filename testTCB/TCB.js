const app = require("tcb-admin-node")

app.init({
    secretId: 'AKIDWzIUWQBj8OVjeT9wTq24v6DFGFB2wU6c',
    secretKey: 'cAe3ISQErJagbWJvNfomc7sUwDPRIzb5',
    env: 'jackchen-51fdd8'
})
let result = async function test() {
    let data = await app.callFunction({
        name: "getTopping",
    })
    console.log(data.result)
    return data.result
}
result();