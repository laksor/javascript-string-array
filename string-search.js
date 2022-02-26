// string search
const products = [
    'Dell hard core laptop',
    'Samsung hard core laptop',
    'Lenovo hard core laptop',
    'Apple hard core phone',
    'Dell hard core laptop',
    'Lg hard core lAptop',
    'Dell hard core laptop'
];

const searching = 'Laptop';

// indexOf

const output = [];

for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output);
