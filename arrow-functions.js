const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]
const integers = realNumberArray.filter(number => 
    Number.isInteger(number) && number > 0)
const squares = integers.map(number => number * number)
console.log(squares);

