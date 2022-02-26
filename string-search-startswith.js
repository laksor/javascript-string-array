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

const searching = 'Dell';

// startsWith 

const output = [];

for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);
