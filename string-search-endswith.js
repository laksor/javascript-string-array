// string search
const products = [
    'Dell hard core laptop',
    'Samsung hard core laptop',
    'Lenovo hard core phone',
    'Apple hard core phone',
    'Dell hard core laptop',
    'Lg hard core lAptop',
    'Dell hard core laptop'
];

const searching = 'phone';

// endsWith 

const output = [];

for(const product of products){
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);
