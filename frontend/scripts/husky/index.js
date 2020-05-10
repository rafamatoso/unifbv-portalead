/* eslint-disable no-console */
const chalk = require("chalk");

const { validate } = require("./validation");
const { executeFn } = require("./execute");

executeFn(validate, console.log, chalk, process.exit);
