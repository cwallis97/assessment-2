///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const totalFoodPrice = cart.reduce((total, currentItem) => {
    return total + currentItem.price;
}, 0);

console.log(totalFoodPrice);



// const summedPrice = cart.reduce(/* CALLBACK HERE */)

const summedPrice = cart.reduce((result, currentItem) => {
    return result + currentItem.price;
}, 0);

console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE


function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxedTotal = cartTotal + (cartTotal * tax);
    const finalPrice = taxedTotal - couponValue;
    return finalPrice;
}

const cartTotal = cart.reduce((total, item) => {
    return total + item.price;
}, 0);

const couponValue = 2.5;
const tax = 0.06;  

const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
console.log(finalPrice);


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/
const customer = {
    firstName: 'Curtis',          
    lastName: 'Dewalap',            
    email: 'Curtis.d@gmail.com',
    phoneNumber: '+8768900909', 
};

console.log(customer.firstName); 
console.log(customer.lastName);   
console.log(customer.email);    
console.log(customer.phoneNumber); 


/*
firstName: First name is just the first name of the costumer its a string cause its text.
lastName: the customer's last name. Similar to firstName, it is a string.
email: this is there email its text based as well as it it also text based.
phoneNumber: this is for the costumers phone number I still used a string to stray away from any mathmatical issues that could arise.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const Johnson = {
    firstName: 'Demarkis',          
    lastName: 'Walsh',          
    email: 'demarkis.W@yahoo.com', 
    phoneNumber: '+4567857878',  

};
console.log(Johnson.firstName);  
console.log(Johnson.lastName);   
console.log(Johnson.email);      
console.log(Johnson.phoneNumber); 