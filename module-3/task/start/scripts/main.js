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

/*let prouductArray = [productName, price, quantity, inStock, discountAmount]

console.log(prouductArray)

let firstItem = productArray[0]

let lastItem =  productArray[4]

console.log(firstItem)
console.log(lastItem)*/

let productAsAnItem ={
    productName:'Baked Beans',
    price: 0.89,
    quantity: 2,
    inStock: true,
    discountApplied: 0.2,
};

console.log(productAsAnItem.productName);


//productAsAnObject.price =1.25; 

//productAsAnObject.instock = false;

//productAsAnObject.loyaltyCard = true;

//console.log(productAsAnObject.loyaltyCard)
 
//delete.productAsAnObject

let numbers =[1,2,3,4,5,6,7,8,9,];
for( let counter = 0; counter < 5; counter++){
    console.log(counter);

} 

 /*for loop
counter = 1
counter <= 12 
counter++*/

/*for(let counter = 1; counter <= 12; counter++ ){
    let result = num * counter;
    console.log( '${num} * ${counter} = ${result}' );

}
multiplyBy(10);*/

function totalPriceOfShopping(arr) {
    let totalPrice = 0;
    for(let counter = 0; arr.length; counter++); {
       totalPrice = totalPrice + arr[counter].price * arr[counter].quantity;

    }
    return totalPrice.toFixed(2);

}

console.log(totalPriceOfShopping(shoppingCart));

function discountToiletries(arr) {
    let totalPrice = 0;
    for( let counter = 0; arr.length; counter++); {
        if(type === 'toiletries') {
            totalPrice = (toiletries / 50) + price;
        }
        else {
            price = totalPrice +
        }
    return totalPriceOfShopping;

    }
      
}
console.log(discountToiletries (shoppingCart));






5. If it is then remove 50% from its price and add it to the totalPrice
6. Else just work out the price and add it to the totalPrice
7. outside of the for loop but still inside the function return totalPrice
8. 
   * Your output should be: 68.22

