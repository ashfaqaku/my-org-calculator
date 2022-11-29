import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}

async function wellcome() {
    // let rainbowTitle = chalkAnimation.rainbow(`lets Start Calculation`);
    let rainbowTitle = (`lets Start Calculation`);
    console.log(rainbowTitle);
    await sleep();
    // rainbowTitle.stop();
    console.log(`       _________________
    |  _________________  |
    | | JO            0.| |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | * | |
    | |___|___|___| |___| |
    | | # | 0 | # | | / | |
    | |___|___|___|_|___| |
    |_____________________|`)
}

await wellcome();

async function askQuestion() {
    const answers = await inquirer
    .prompt([
        {
            type:"list",
            name:"operator",
            message:"Which operation you want to perform",
            choices: ["Addition","Subtraction","Multiplication","Division"]
        },
        {
            type:"number",
            name:"num1",
            message:"Enter number 1 :"
        },
        {
            type:"number",
            name:"num2",
            message:"Enter number 2 :"
        }
    ]);
    if
    (answers.operator == "Addition"){
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if
    (answers.operator == "Substraction"){
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if
    (answers.operator == "Multiplication"){
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if
    (answers.operator == "Division"){
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }    
};

// askQuestion();

async function startAgain() {
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type :"input",
            name:"restart",
            message:"Do you want to constinue ? Press Y or N:"
        })
    }while (again.restart == 'Y' || again.restart == 'y' || again.restart == 'YES' || again.restart == 'yes')
}

startAgain();




























// let input1 = await inquirer.prompt([{
//     name : "number1",
//     type: "number",
//     message: "Enter first value."
// }]);
// let input2 = await inquirer.prompt([{
//     name:"number2",
//     type: "number",
//     message: "Enter second value:"
// }])
// let operation=await inquirer.prompt([{
//     name:"operator",
//     type:"list",
//     choices: ["Addition","Substraction","Multiplication","Devision"],
//     message: "enter operation"
// }])
// // .then(answer=>{
// //     console.log(`Answer:`,answer.choices);
// // })
// //  console.log(operation.choices."Addi")
//  let result=0;
//   switch (operation.operator) {
//     case 'Addition':
//         // console.log("rech");
//         result = input1.number1+input2.number2
//         console.log(result);
//         break;
//     case "Substraction":
//         result = input1.number1-input2.number2
//         console.log(result);
//         break;
//     case "Multiplication":
//         result =input1.number1*input2.number2
//         console.log(result)
//     default:
//         break;
// }

// // console.log(result);
// // console.log(input1);
// // console.log(input1.number1+input2.number2);
// // console.log(operation);
// // console.log(operation.operator);
// // console.log(operation.list);
// // console.log(operation.choices);
// // console.log(operation.message);