/*Given an array of numbers, write a function that returns an array that
 has all duplicate numbers removed and is sorted from least to greatest */

 let uniqueArray = (array) => [...new Set(array)].sort((a,b) => a > b? 1 : -1);

// console.log(uniqueArray([4,4,6,8,9,9,1,2,2,3,10]));

/*
Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays 
(e.g. [[], [], []]), each containing y number of item z.
*/

let createArrayFrom = (x,y,z) => {
  let returnArray = new Array(x).fill().map((item)=>Array(y).fill(z));
  return returnArray;
};

//console.log(createArrayFrom(3,2,'ani'));

//or

let createArrayFromTwo = (x,y,z) => {

    let array = Array.from(new Array(x), (item) => Array(y).fill(z));
    return array;   
}

//console.log(createArrayFromTwo(3,2,'ani'));

//Create a function that takes a decimal number and converts it to a binary number 

let binaryConvert = (a) => parseInt(a.toString(2));

//console.log(binaryConvert(12));
//console.log(binaryConvert(0));
//console.log(binaryConvert(101));

//Create a function that returns the number of characters shared between two words.

let sharedLetters = (str1,str2) => 
    str1.split('')
    .filter(item => str2.match(item))
    .length;
 
 //   console.log(sharedLetters('ani','jiki'));

/*
 Create a function that takes in a sentence and a character to find. 
 Return an object of each word in the sentence, with the count of the specified character as the value.
*/    

function findOccurrences(str, word) {
    str = str.toLowerCase().split(" ");
    word = new RegExp(word.toLowerCase(), 'g');
    let returnObject = {};
    
    str.forEach(element => {
        let match = element.match(word);
        returnObject[element] = match === null? 0 : match.length;
    });

    return returnObject;

}

//console.log(findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A"));

/*
You will be given an object with various consumer products and thier respective prices.
Return a list of the products with a minimum price of 500 in descending order.
*/

let prices = (obj) => {
    let list = [];

    for( let property of Object.keys(obj)) {
        if(obj[property] >= 500) list.push(property);
    }
    return list;
}

//console.log(prices({"Computer" : 600, "TV" : 800, "Radio" : 50}));
//console.log(prices({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}));

/*
Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. 
Otherwise, return "there is no 7 in the array".
*/

let isSeven = (arr) => {
   let found = arr.find(item => item.toString().includes('7'));
   return found !== undefined?'boom!':'there is no seven in array';
}

//console.log(isSeven([1, 2, 3, 4, 5, 6, 7]));
//console.log(isSeven([8, 6, 33, 100]));
//console.log(isSeven([2, 55, 60, 97, 86]));

// Write a function that takes an integer minutes and converts it to seconds.

let convert = (num) => num * 60 ;

//console.log(convert(5));
//console.log(convert(3));
//console.log(convert(2));

// Write a function that returns the string "something" joined with a space " " and the given argument a.

let returnSomething = (a) => 'something' + ' ' + a ;

//console.log(returnSomething("is better than nothing"));
//console.log(returnSomething("Bob Jane"));
//console.log(returnSomething("something"));  

// Create a function that takes an object and returns the keys and values as separate arrays.

let toArray = (obj) => {
    let array = new Array(2);
    array[0] = Object.keys(obj);
    array[1] = Object.values(obj);
    return array;
}

//console.log(toArray({ a: "Apple", b: "Microsoft", c: "Google" }));
//console.log(toArray({ a: 1, b: 2, c: 3 }));

// Write a function that converts an object into an array of keys and values.

let objectToArray = (obj) => Object.entries(obj);

console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
  }));

//   Create the function that takes an array with objects and returns the sum of people's budgets.

let getBudgets = (arr) => {
  let sum = 0;
  arr.forEach(item => {
      sum+= item['budget'];
  });
  return sum;
};

//console.log(getBudgets([
   // { name: "John",  age: 21, budget: 29000 },
 //   { name: "Steve",  age: 32, budget: 32000 },
  //  { name: "Martin",  age: 16, budget: 1600 }
  //]));

  let getTotalPrice = (arr) => {
    let sum = 0;
    arr.forEach(item => {
        sum+= parseFloat(item['price'])*parseFloat(item['quantity']);
    });
    return parseFloat(sum.toFixed(1));
  };

 // console.log(getTotalPrice([
  //  { product: "Milk", quantity: 1, price: 1.50 },
  //  { product: "Eggs", quantity: 12, price: 0.10 },
  //  { product: "Bread", quantity: 2, price: 1.60 },
   // { product: "Cheese", quantity: 1, price: 4.50 }
  //]));


  let mapLetters = (str) => {
      let obj = {};
     
      str.split('').forEach((item,index) => {
        obj[item]?obj[item].push(index):obj[item] = [index];
      });
      return obj;
  };

  console.log(mapLetters("dodo"));


