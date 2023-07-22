//string data type 
// var name = "joy jerry ";//double quotes
// var name1 = 'joy jerry';//single quotes 

// document.getElementById("demo").innerHTML = name + "<br>"+name1;


//number Data type 
// var x = 4; //An integer 
// var y = 5.5;// A floating point number 

// document.getElementById("demo").innerHTML = x+"<br>" +y 

//boolean data type
// var isCodingfun = true;
// var isMathsFun = true;

// document.getElementById("demo").innerHTML = "is coding fun? " + "<br>" + "is mathsfun? " + isMathsFun;


//Object Data type 
//Accessing Object value

// var banana={
//     color: "yellow",
//     size:"long",
//     quantity:3,
//     isSweet: true,
// };

// document.getElementById("demo").innerHTML ="banana <br>" +"color:" + banana.color + "<br>" + "size:" + banana.size +"<br>" +"Quantity: " + banana.isSweet;

//Array Data Type 
//Accessing arrays values
// var fruits =["apple", "oranage","banana"];

// document.getElementById("demo").innerHTML = fruits [0] + " " + friuts[1] + " "+fruits[2];

/* home fun 
1. with vivid examples explain how type of operator works 
2. What are primitive data
3.Demonstrate with example how to complex data works
*/

/* Assement 
declare varibles of strings, floats and objects of your choice but not the example you where taught 
*/

//2  Primitive data, also known as primitive data types, are the basic data types that are built into programming languages and are used to represent simple values. They are considered "primitive" because they cannot be broken down into simpler data types.

//3
let person = {
    name: "Joy",
    age: 14,
    hobbies: ["reading", "hiking", "gaming"],
    address: {
      street: "IJN",
      city: "Jabi",
      state: "Abuja"
    }
  };
  console.log(person.name);
  console.log(person.hobbies[1]);


  // String variable
let customerName = "Alice Smith";

// Float variable
let itemPrice = 3.99;

// Object variable
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  publishedYear: 1925
};

let greeting = "Hello, " + customerName + "!";
console.log(greeting);


