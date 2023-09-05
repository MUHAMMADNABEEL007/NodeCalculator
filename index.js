#!/usr/bin/env node
import { answer } from './query.js';
console.log(answer);
(answer.operator === '+') ? console.log(`Your answer is ${answer.input1 + answer.input2}`) :
    (answer.operator === '-') ? console.log(answer.input1 - answer.input2) :
        (answer.operator === 'x') ? console.log(answer.input1 * answer.input2) :
            (answer.operator === '/') ? console.log(answer.input1 / answer.input2) : console.log('error');
