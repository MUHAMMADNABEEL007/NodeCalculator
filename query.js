import gradient from 'gradient-string';
import inquirer from 'inquirer';
let answer = await inquirer.prompt([
    {
        name: 'input1',
        type: 'number',
        message: gradient.rainbow('Calculator') + '\nPlease input your first number',
    },
    {
        name: 'input2',
        type: 'number',
        message: 'Please input your second number',
    },
    {
        name: 'operator',
        type: "list",
        message: 'Please select your operator!',
        choices: ['+', '-', 'x', '/'],
    },
]);
export { answer };
