import { answer } from './query.js';
import gradient, { rainbow } from 'gradient-string';


console.log(answer);

(answer.operator==='+')?console.log(`Your answer is ${answer.input1+answer.input2}`):
(answer.operator==='-')?console.log(answer.input1-answer.input2):
(answer.operator==='x')?console.log(answer.input1*answer.input2):
(answer.operator==='/')?console.log(answer.input1/answer.input2):console.log('error');


