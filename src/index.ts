var names: string = "akash";

console.log(names);

var arr2: Array<number | string | true> = [];

// function with optionnal chaining and type

// if you are not using the log in function you have to return the value
type FunType1 = (n: number, m: number, l?: number) => number;

const func1: FunType1 = (n, m, l) => {
  if (typeof l === "undefined") return n * m;
  else return n * m * l;
};

const num = func1(10, 30, 10);
console.log(num);

// if you want to log value in the function tou have to declare the value of function as void

type FunType = (n: number, m: number, l?: number) => void;

const func: FunType = (n, m, l) => {
  if (typeof l === "undefined") console.log(n * m);
  else console.log(n * m * l);
};

func(10, 20);

// function with object
interface productType {
  firstName: string;
  stock: number;
  price: number;
  photo: string;
}
type GetData = (product: productType) => void;

const getData: GetData = (product) => {
  console.log(product);
};

const productOne: productType = {
  firstName: "Apple",
  stock: 43,
  price: 5555,
  photo: "ksjdfiosdjf",
};

// class 


class player{
  height:number;
  weight:number;

  constructor(height:number, weight:number){
    this.height = height;
    this.weight = weight;
  }
}

const abhi = new player(100, 150);
console.log(abhi.height);

// constructor overloading


class employ{

  name:string;
  age:number;

  constructor(kname:string, age:number);

  constructor(name:string);

  constructor(name:string, age?:number){
    this.name = name;
    this.age = age || 0;
  }

}

const employOne = new employ('akash')

// generics 
function getValue<ElementType>(array: ElementType[]) {
  return array[0];
}

type ApiResponse<Data> = {
    data: Data;
    isError:boolean;
}

type userResponse = ApiResponse<{names:string, age:number}>

const ResponseOf: userResponse = {
  data:{
    names:"akash",
    age: 23,
  },
  isError:false,
}


const numOne = [1, ,2 ,3 ,4]
const first = getValue(numOne)

const numberValue = ['akash', 'balaji', 'shiva', 'uttam']
const second = getValue(numberValue)

