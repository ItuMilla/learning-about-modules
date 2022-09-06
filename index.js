// acts like a "script" tag ..
import greet from './greet.js';

import chalk from 'chalk';

import fun from "everyday-fun";

import figlet from 'figlet';


//Greeting
console.log(chalk.black.bgGreen.bold(greet('Itumeleng')))

// const all = reguire("everyday-fun");

figlet('The riddler....', function(err, result){
    console.log(chalk.blue.bgWhite.bold(result));

//  Riddler   
    const riddle = fun.getRandomRiddle();

console.log(chalk.black.bgGreen(riddle.riddle));
// show the answer to the riddle after 3 seconds
setTimeout(function() {
    console.log(chalk.bgBlackBright.bold(riddle.answer));
}, 3000)

});



//console.log(chalk.bgBlackBright.bold{greet('Itumeleng')));

// console.log(greet('Itumeleng'));
// console.log(greet('Xola'));
