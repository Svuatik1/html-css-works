
const reverseNumber = (number) => {
    return parseFloat(number.toString().split('').reverse().join(``)) * Math.sign(number);
}

console.log(reverseNumber(-904));