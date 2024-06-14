#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        name: "FirstNumber",
        type: "number",
        message: "Enter your FirstNumber"
    },
    {
        name: "SecondNumber",
        type: "number",
        message: "Enter your SecondNumber"
    },
    {
        name: "Operation",
        type: "list",
        message: "Select one option to perform action",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// condition statement
if (answer.Operation === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operation === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operation === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operation === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please select a valid number");
}
