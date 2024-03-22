#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//step 1:
const answers :{
    numberOne:number
    numberTwo:number
    operator:String

}=await inquirer.prompt([
    {type:"number",
    name:"numberOne",
    message:"Enter your first number"},
    
    {type:"number",
    name:"numberTwo",
    message:"Enter your second number"},
  
    {
    type:"list",
    name:"operator",
    message:"Enter your operator",
    choices:["+","-","*","/"]
   }
])
//step 2 switch case
const{numberOne,numberTwo,operator} = answers;
let result
switch (operator) 
{  case "+":
 result =numberOne + numberTwo;
 break;
 case "-":
    result =numberOne- numberTwo;
    break;
    case "*":
    result =numberOne* numberTwo;
    break;
    case "/":
    result =numberOne/ numberTwo;
    break;
    default:
        console.log(chalk.red("Invalid operator"));
}
console.log(`${numberOne} ${operator} ${numberTwo} =${result}`);