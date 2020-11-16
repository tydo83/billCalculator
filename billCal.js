const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const { totalmem } = require('os');

const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let cost = 0;
let tax = 0;
let tip = 0;

const priceFunction = function(price) {
    cost += Number(price);
    interface.question(`Is this all you had? (type Yes or No):\n`, isThisAll)
}

const isThisAll = function(answer) {
    if(answer.toLowerCase() == 'yes') {
        console.log('Step2. Type the city where you ate:');
        interface.question(`(right now, we only support NY and NJ area)\n`, taxCal)
    } else {
        interface.question(`Enter the price of other dishes:\n`, priceFunction);
    }
}

const taxCal = function(state) {
    if(state.toUpperCase() === 'NY') {
        tax = cost * 0.0875;
    } else if(state.toUpperCase() === 'NJ') {
        tax = cost * 0.06625;
    } else {
        interface.question('Type only NY or NJ:\n', taxCal)
    }
    interface.question('Step3. How much you want to tip?:\n', tipCal)
}

const tipCal = function(tipPercent) {
    tip = (cost + tax) * (tipPercent / 1000);
    console.log('You have to venmo:')
    console.log('$' + (Number(cost) + Number(tax) + Number(tip)).toFixed(2));
    interface.close();
}

console.log(`***********************************************************`);
console.log(`                     Venmo Calculator`);
console.log(`-The easiest way to calculate the amount you have to venmo-`);
console.log(`***********************************************************`);
interface.question(`Step1. enter the price of food you ordered below:\n`, priceFunction);



