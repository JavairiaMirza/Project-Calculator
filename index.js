import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter your first number:"
    }, {
        type: "number",
        name: "numberTwo",
        message: "kindly enter your second number:"
    }, {
        type: "list",
        name: "operator",
        choices: ["addition(+)", "subtraction(-)", "multiplicatiob(*)", "division(/)"],
        message: "Select your operator:"
    }
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
}
let result = 0;
if (operator === "addition(+)") {
    result = numberOne + numberTwo;
}
else if (operator === "subtraction(-)") {
    result = numberOne - numberTwo;
}
if (operator === "multiplication(*)") {
    result = numberOne * numberTwo;
}
if (operator === "division(/)") {
    result = numberOne / numberTwo;
    console.log("Your result is:", result);
}
else {
    console.log("Kindly enter valid input");
}
