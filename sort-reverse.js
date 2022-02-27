
// sorting an array
// normal sorting only for single digit

const numbers = [4, 5, 9, 6, 2, 1, 8, 7, 3];
const sortedNumber = numbers.sort();
console.log(sortedNumber);

// sorting common way using function
const bigNumbers = [22, 44, 55, 77, 33, 65, 89, 777];
const sortingCommon = bigNumbers.sort(function(a, b){
    return a-b;
});
console.log(sortingCommon);

// reverse an array
const reverseNumbers = numbers.reverse();
console.log(reverseNumbers);