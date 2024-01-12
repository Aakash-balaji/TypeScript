"use strict";
var names = "akash";
console.log(names);
var arr2 = [];
const func1 = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    else
        return n * m * l;
};
const num = func1(10, 30, 10);
console.log(num);
const func = (n, m, l) => {
    if (typeof l === "undefined")
        console.log(n * m);
    else
        console.log(n * m * l);
};
func(10, 20);
const getData = (product) => {
    console.log(product);
};
const productOne = {
    firstName: "Apple",
    stock: 43,
    price: 5555,
    photo: "ksjdfiosdjf",
};
// class 
class player {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}
const abhi = new player(100, 150);
console.log(abhi.height);
// constructor overloading
class employ {
    constructor(name, age) {
        this.name = name;
        this.age = age || 0;
    }
}
const employOne = new employ('akash');
// generics 
function getValue(array) {
    return array[0];
}
const ResponseOf = {
    data: {
        names: "akash",
        age: 23,
    },
    isError: false,
};
const numOne = [1, , 2, 3, 4];
const first = getValue(numOne);
const numberValue = ['akash', 'balaji', 'shiva', 'uttam'];
const second = getValue(numberValue);
