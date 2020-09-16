/*Given an array of numbers, write a function that returns an array that
 has all duplicate numbers removed and is sorted from least to greatest */

 let uniqueArray = (array) => [...new Set(array)].sort((a,b) => a > b? 1 : -1);

 console.log(uniqueArray([4,4,6,8,9,9,1,2,2,3,10]));

/*
Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays 
(e.g. [[], [], []]), each containing y number of item z.
*/

let createArrayFrom = (x,y,z) => {
  let returnArray = new Array(x).fill().map((item)=>Array(y).fill(z));
  return returnArray;
};

console.log(createArrayFrom(3,2,'ani'));

//or

let createArrayFromTwo = (x,y,z) => {

    let array = Array.from(new Array(x), (item) => Array(y).fill(z));
    return array;   
}

console.log(createArrayFromTwo(3,2,'ani'));

//Create a function that takes a decimal number and converts it to a binary number 

let binaryConvert = (a) => parseInt(a.toString(2));

console.log(binaryConvert(12));
console.log(binaryConvert(0));
console.log(binaryConvert(101));

//Create a function that returns the number of characters shared between two words.

let sharedLetters = (str1,str2) => 
    str1.split('')
    .filter(item => str2.match(item))
    .length;
 
    console.log(sharedLetters('ani','jiki'));

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

console.log(findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A"));

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

console.log(prices({"Computer" : 600, "TV" : 800, "Radio" : 50}));
console.log(prices({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}));

/*
Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. 
Otherwise, return "there is no 7 in the array".
*/