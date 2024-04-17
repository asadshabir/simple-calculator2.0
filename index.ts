import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  { message: chalk.bold.cyan("Enter First Number"), type: "number", name: "firstNumber" },
  { message: chalk.bold.green("Enter Second Number"), type: "number", name: "secondNumber" },
  {
    message: chalk.bold.magenta("Select Operator to perform operation :"),
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multipication", "Division","Percentage"],
  },
]); 
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multipication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Divsion") {
  console.log(answer.firstNumber / answer.secondNumber);
}
  else if (answer.operator === "Percentage") {
    console.log(Math.floor(answer.firstNumber / answer.secondNumber*100));

} else {
  console.log(chalk.red.bold("ERROR !! Please Select valid operator !"));
}