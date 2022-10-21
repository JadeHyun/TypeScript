// Primitives: number, string, boolean (type script 의 기초)
let num: number;
num = 2;

let userName: string;
userName = "jon";

let isBoolean: boolean;
isBoolean = true;

function addNumber(a: number, b: number) {
  return a + b;
}

let data = addNumber(2, 5);

console.log(num);
console.log(userName);
console.log(isBoolean);

console.log(data);

//--------------------------------------- More complex types --------------------------------------------------

let hobbies: string[]; // 배열의 타입

hobbies = ["jon", "jade", "something"];

// let person:any;
// any 라는 타입도 있다. 하지만 any 로 지정하게 되면 모든걸 다 허용한다는 뜻인데, 그렇게 되면 타입스크립트를 사용할 필요가 없어진다.
// ( 일반 javascript 랑 다를께 없음. )

let person: {
  // 타입스크립트에서 객체를 사용할 때에는 키값의 타입을 지정해준다.
  name: string;
  age: number;
  married: boolean;
};

person = {
  name: "jun",
  age: 29,
  married: false,
};

let people: {
  name: string;
  age: number;
  married: boolean;
}[];
// 타입스크립트는 객체뒤에 대괄호([])를 붙이면 배열안에 객체로 만들 수 있다.
// 이런 방법으로 다양하게 타입을 지정할 수 있다.

people = [
  { name: "hyun", age: 29, married: false },
  { name: "jun", age: 30, married: true },
];

console.log(hobbies);
console.log(person);
console.log(people);

// ----------------------------- function types, parameters --------------------------------------

// type inference ( 타입추론 )

/*
 let course = ' react-type-script ' => 문자열
  course = 1234 => 숫자열 

  타입을 지정하지 않았지만 오류가 생기는것을 볼 수 있다. 
  그 이유는 타입스크립트의 기능 중 하나인 타입추론에 의해 정해지기 때문이다.

  기초부분에서 배운내용은 변수를 선언할 때 타입을 지정한다. ( let course:string = 'react-type-script )
  하지만 매번 지정을 하는건 상당히 불필요한 행동이다. 
  처음 선언을 할 때 타입을 명시하지 않고, 문자열로 선언할 경우 기본 타입을 문자열로 지정이 된다.
  
  따라서 course 에 숫자 1234 를 재할당 할 경우 에러가 발생하는 것이다. 
  이는 타입스크립트의 핵심 기능중 하나이다. ( 자주 애용하길 바람. )
  
*/

// 유니온(union) 타입
/*
    변수를 선언할 때 하나의 타입을 지정하게 된다. 하지만 우리는 두개 이상의 타입을 혼용하여 사용해야 할 경우도 생긴다.
    이럴때 사용하는게 유니온 타입이다. 

    let value : number | string = ' This is union type '

    만약 타입을 지정하지 않고 value 를 선언하게 된다면 타입 추론에 의해 value 의 타입은 string 이 될 것이다.
    하지만 유니온 타입은 숫자와 문자 타입 둘 다 선언 할 수 있게 해준다. 
    ( 유니온 타입을 지정하려면 파이프문자를 사용하여 두개 이상의 타입을 선언할 수 있다. )

    
    value = 1234; // 정상작동.

    let names = string | string[] = 

    
*/

let names:
  | string
  | string[]
  | {
      name: string;
      age: number;
      married: boolean;
    } = ["hyun", "jun", "jade"];
names = "someone Name";
names = {
  name: "jadeJun",
  age: 29,
  married: false,
};

console.log(names);

// ----------------------------- 타입 별칭(type aliases) -----------------------------------

// 타입을 지정해서 인스턴스처럼 사용할 수 있게 해주는 타입스크립트만의 방식이다.
// ( type 을 먼저 선언하고 그 뒤에 이름, 값으로 타입을 지정해준다. => 이름의 타입 인스턴스를 생성한다. )
// 유니온과 비슷하게 생성한 타입을 배열처럼 변경할 수 있다.

type Person = {
  name: string;
  age: number;
  married: boolean;
  friend: boolean;
  message: string;
};

let jade: Person | string;

jade = {
  name: "jade",
  age: 29,
  married: true,
  friend: true,
  message: "hello world",
};

let jun: Person[];

jun = [
  {
    name: "jade",
    age: 29,
    married: false,
    friend: true,
    message: `hello i'm jun`,
  },
];

console.log(jade);
console.log(jun);
