//operators :

// + - * /

// in college : a + b*c + d*e 
//in industry : a + (b*c) + (d*e)    --> proper method the one you want to perform keep them in brackets .

// ps : create a discount calculation 

var initial_price = 799;
var discounted_price = 199;

discount_given = ((initial_price-discounted_price)/initial_price) * 100;

console.log(discount_given);  // we get : 75.09386733416771

// if we want to get round figure 

var discounted = Math.round(discount_given);

console.log(discounted + " % off");

// site to use : 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript

// to know what type of datatype is used 

console.log(typeof discounted );    // number 

var pay ;

console.log(typeof pay );    // undefined 

var a = " ";

console.log(typeof a );     // strings 

var n = null 

console.log(typeof n );    // object