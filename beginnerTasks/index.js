//Write a JS program to concatenate two strings except their first letter

let concatenate = (str1,str2) => str1.slice(1) + str2.slice(1);

console.log(concatenate("san",'asi'));

//Given two values, check which one is closer to 100

let checkCloser = (a,b) => (100- a) < (100 - b)? a : b ;

console.log(checkCloser(1,2));

//Check if string has 2 to 4 occurrences of a specified character

function checkOccurrence(string, char) {
    let checker = 0;
    for(i = 0; i < string.length; i++){
        if(string[i] == char){
            checker++;
        }
    }

    if( checker>= 2 && checker <= 4) {
        return "Has two to four occurrences"
    }else {
        return "Does not have two to four occurrences"
    }
}

console.log(checkOccurrence('aani', 'a'));
console.log(checkOccurrence('bani', 'b'));
console.log(checkOccurrence('bani', 'i'));
console.log(checkOccurrence('bbbbbbani', 'b'));
console.log(checkOccurrence('bbbbani', 'b'));

// Check if given array of numbers is sorted 

const isSorted = (arr) => {
    for(i = 0; i< arr.length; i++){
        if(arr[i+1] < arr[i]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1,2,3,4]));
console.log(isSorted([5,2,3,4]));


//Return the largest even number from an array 

const largestEven = (arr) => {
    arr.filter(n => n%2 === 0).sort();
    return arr[arr.length - 1];
}

console.log(largestEven([1,3,2,4,7,8]));
console.log(largestEven([1,3,2,5,7,12]));

//Replace the first found digit in a string with $ 

const replaceDigit = (str) => {

    return str.replace(/[0-9]/,'$');
}

console.log(replaceDigit("1ani"));
console.log(replaceDigit("1ani2"));
console.log(replaceDigit("an6i"));

//Given a year, report if it is a leap year

const leapYear = (year) => 
    year % 4 === 0? true : false ;

console.log(leapYear(2018));
console.log(leapYear(2020));
console.log(leapYear(2016));
console.log(leapYear(2024));    
console.log(leapYear(2015));

// Check if the first obj has the same property names as the second one (which may have additional properties)

const objA = {a: 1, b:1, c:1};
const objB = {a: 1, b:'ani', c:1};
const objC = {a: 4, b:5, d:1};

function compareObjects(obj1,obj2) {
    let obj1Properties = Object.getOwnPropertyNames(obj1);
    let obj2Properties = Object.getOwnPropertyNames(obj2);

    let checker = 0;

    for(i = 0; i < obj1Properties.length; i++) {

        if(obj1Properties[i] == obj2Properties[i]) {
            checker+= true;
        }else {
            checker+= false;
        }

        if(checker.includes(false)){
            return false;
        } else {
            return true;
        }
    }
}

console.log(compareObjects(objA,objB));
console.log(compareObjects(objA,objC));
console.log(compareObjects(objB,objC));


