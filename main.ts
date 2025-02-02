#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.blue.bold(`        WELCOME To CURRENCY CONVERTOR ( -_•)╦==╤─   - (◣_◢)`))

const Currency:any = {
    // base currency
    USD: 1 ,  
    EUR:0.92,
    GBP:0.79,
    INR:83.30,
    PKR:277.54,
    SAUI_RIYAL:3.75,
    KUWAIT_DINAR:0.31,
    CANADIAN_DOLLAR:1.36,
    DUBAI_DIRHAM:3.67
};

let answer = await inquirer.prompt([   
    
    {
    name:"from",
    message:chalk.bold("Enter from Currency"),
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR","SAUI_RIYAL","KUWAIT_DINAR","CANADIAN_DOLLAR","DUBAI_DIRHAM" ]
   },
   {
    name:"to",
    message:chalk.bold("Enter to Currency"),
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR","SAUI_RIYAL","KUWAIT_DINAR","CANADIAN_DOLLAR","DUBAI_DIRHAM" ]
   },
   {
    name:"amount",
    message:chalk.blackBright.bold("Enter from Amount"),
    type:"number",
    
   },

])

let fromAmount = Currency[answer.from]
let toAmount =  Currency[answer.to]
let amount = answer.amount;
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount

console.log(chalk.green("Your converted amount from" + "  " + answer.from + " " + "to" + " " + answer.to + " " + Math.round(convertedAmount)))

console.log(`       THANK YOU!◝(ᵔᵕᵔ)◜     `)