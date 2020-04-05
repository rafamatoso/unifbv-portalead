require('dotenv-safe').config();

const server = require("./app");

const { SERVER_PORT } = process.env;

server.listen(
    SERVER_PORT,
    console.log(`Server listen port: ${SERVER_PORT}`)
);
