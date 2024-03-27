#! /usr/bin/env node
import inquirer from "inquirer"

const answer = await inquirer.prompt([

    {
        name : "FirstNumber",
        type : "number",
        message : "Enter your FirstNumber"
    },
    {
         name : "SecondNumber",
         type : "number",
         message : "Enter your SecondNumber"
    },
    {
          name : "Operation",
          type : "list",
          message : "Select one option to perform action",
          choices : ["Addition" , "Subtraction" , "Multiplication" , "Division"],
    },
])

 // condition statement
 if (answer.Operation === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
 } else if (answer.Operation === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
 } else if (answer.Operation === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
 } else if (answer.Operation === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
 }else {
    console.log("Please select a valid number")
 }
