//this is a single line comment

const productName = 'Baked beans';
let price = 0.89;
let quantity = 2;
let inStock = true;
let discountAmount = 0.20;

//console.log( productName, price );

function showProductName() {
    console.log (productName);
}
showProductName();

function totalPrice(productPrice,productQuantity) {
    console.log(productPrice * productQuantity) ;

}
//total(PriceQuantity)

let checkAvailability = productInStock => console.log(productInStock);

checkAvailability (inStock);

function productDiscount() {
    if(quantity > 1) {
      let newPrice = (price - discountAmount * quantity);
      console.log(newPrice);
     } else{
         console.log( price * quantity);
     }
}

productDiscount();

/*
check drink
coke
lemonade
orangeade

*/
function drinkOrder (drink, size) {
    switch(drink){
        case 'coke':
         console.log(drink);
         break;
        case 'lemonade':
        console.log(drink);
        break;
        case 'orangeade':
            console.log(drink);
            break;
            default:
            console.log(drink, 'not available')
            break;
    }
    drinkOrder('coke', 'extra large');

}


function calculator (num1, num2, operator) {
    switch(operator){
        case '+':
        console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
        break;
        case '-':
            console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
        break;
        case  '*':
            console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`)
        break;
        case '/':
            console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
        break;
        default:
            console.log();
            break;

        

    }
} /*end of calculation*/

calculator(5, 5, '+')
calculator(5, 5, '-')
calculator(5, 5, '*')
calculator(5, 5, '/')


