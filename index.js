const fastify = require("fastify");
const data = require("./sample.json");

const app = fastify({
    logger: true
});

app.addHook("onSend", (request, reply, payload, done) => {
    console.log("SENDING DATA");
    console.log(payload);
});

app.addHook("onResponse", (request, reply, payload, done) => {
    console.log("SENDING DATA");
    console.log(payload);
});

app.addHook("onClose", (request, reply) => {
    // Some code
    console.log("CLOSING REQUEST");
});

// Declare a route
app.get("/", (request, reply) => {
    reply.send(data);
});


// Run the server!
app.listen(4000);