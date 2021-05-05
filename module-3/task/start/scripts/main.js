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