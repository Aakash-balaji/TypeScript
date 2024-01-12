
// console.log("hello world");

// let age:number = 23;
// if (age<50) {
//     age+= 10
// }
// console.log(age);

// // Array
// let numbers: number[] = [1, 2, 3]

// // tuple
// let user: [number,string] = [1,'akash']

// enum size{small, medium, large}
// let mySize: size = size.medium;

// console.log(mySize);

// // function

// function calculateTax(income:number,taxYear = 2022):number{

//     if (taxYear < 2022) 
//         return income * 1.2;
//     return income * 1.3;

// }

// calculateTax(10_000)


// // object

// // let employes:{
// //     readonly id: number,
// //     name:string
// //     retire:(data:Date) => void
// // } = {
// //     id : 1,
// //     name : 'Akash',
// //     retire : (data: Date) => {
// //         console.log(data);
        
// //     }
// // }


// // Type alianses
// type Employe = {
//     readonly id: number,
//     name:string
//     retire:(data:Date) => void
// }
// let employes: Employe = {
//     id : 1,
//     name : 'Akash',
//     retire : (data: Date) => {
//         console.log(data);
        
//     }
// }


// // Union Types 

// function KgToLbs(wight:number | string):number{
//     // narrowing
//     if (typeof wight === 'number')
//         return wight * 2.2
//     else
//         return parseInt(wight) * 2.2
// }

// KgToLbs(10);
// KgToLbs('10kg');


// // Intersection Types 

// type Draggabele ={
//     drag:()=> void
// };
// type resizable={
//     resize:()=> void
// }

// type UIWidget = Draggabele & resizable;

// let textBox:UIWidget = {
//     drag:()=>{},
//     resize:()=>{}
// }

// // nullable types 
// function great(name:string | null | undefined){
//     if (name)
//         console.log(name.toLocaleUpperCase());

//     else if(name === null)
//         console.log('hola!');

//     else
//         console.log('undefined');  
        
// }

// great('akash')


// // optional chaining 

// type Customer ={
//     birthday:Date;
// }

// function getCustomer(id:number):Customer | null | undefined{
//     return id === 0? null:{birthday:new Date};
// }

// let Customer = getCustomer(1)

// console.log(Customer?.birthday);

let temperature: number = 25;
let isHot: boolean = temperature > 35;

// if (isHot) {
//     console.log('It\'s a hot day!');
// } else {
//     console.log('It\'s not too hot today.');
// }

// Assuming you have an HTML element with the class "boolean"
let hotday: any = document.querySelector('.hot');

// Check if the element exists before setting innerHTML
if (hotday) {
    // Display a message based on the boolean value
    hotday.innerHTML = isHot ? 'It\'s a hot day!' : 'It\'s not too hot today.';
} else {
    console.error('Element with class "boolean" not found.');
}

