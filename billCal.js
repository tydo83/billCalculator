const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const priceFunction = function() {
    interface.question(`type the tax rate`, taxCal)
    }

const taxCal = function() {
    interface.question('enter the percentage of the tip', tipCal)
}

const tipCal = function(){
    console.log('test done')
}










console.log(`Hi, thank you for using my first application`);
console.log(`This is a really simple app to calculate how much you have to venmo`);
interface.question(`enter the price of food you ordered:\n`, priceFunction);