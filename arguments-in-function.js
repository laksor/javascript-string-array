
// using arguments in function (for exceptional use only)

function addNumbers(num1, num2){
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    return result;
}
const sum = addNumbers(12, 20, 40, 100, 200);
console.log(sum);