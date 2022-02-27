// slice (is like getting a pizza slice ).

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberSliced = numbers.slice(3, 7);
console.log(numberSliced);

// splice (remove element from an array also add element into same array).

const sp = numbers.splice(3, 2, 77, 55);
console.log(sp);
console.log(numbers);