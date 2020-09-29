export default class User {
    constructor(name,age){
        this.userName = name;
        this.userAge = age
    }

    showUser() {
        console.log(`This is ${this.userName} at ${this.userAge} age`);        
    }
}

export function sayHi(name) {
    console.log(`Hi, ${name}!`);
}