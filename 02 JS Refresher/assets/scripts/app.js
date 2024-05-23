// import { example } from './utils.js';
// import gonni from './utils.js';
// import * as utils from './utils.js';

// console.log(example);
// console.log(gonni);
// console.log(utils.gonni);
// console.log(utils.greeting);

// let userMessage = 'Hello World';

// console.log(userMessage);
// console.log(userMessage);

// function greet(username, message) {
//   // console.log(username + ', ' + message);
//   return username + ', ' + message;
// }

// greet('gonni', 'hi');
// greet('max', 'hello');
// let greeting1 = greet('max', 'hello');
// console.log(greeting1);

// let greeting2 = greet('gonni', 'hello');
// console.log(greeting2);

// const user = {
//   name: 'gonni',
//   age: 24,
//   greeting() {
//     console.log('Hi');
//     console.log(this.age);
//   },
// };

// console.log(user);
// console.log(user.name);
// user.greeting();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log('Hi!');
//   }
// }

// let user1 = new User('gonni', 24);
// console.log(user1);

// const hobbies = ['reading books', 'exercise', 'cooking'];
// console.log(hobbies[0]);

// hobbies.push('working');
// console.log(hobbies);

// const result = hobbies.findIndex((item) => {
//   return item === 'exercise';
// });

// console.log(result);

// const newArr = hobbies.map((e) => e + '!');
// console.log(newArr);

// const newArr2 = hobbies.map((e) => ({ text: e }));
// console.log(newArr2);

//destructering 연산자
// const [lastName, firstName] = ['gonni', 'kim'];

// console.log(firstName);
// console.log(lastName);

//spread 연산자
// const newHobbies = ['riding'];
// const user = {
//   name: 'gonn',
//   age: 24,
// };

// const mergeHobbies = [...hobbies, newHobbies];
// console.log(mergeHobbies);

// const extenedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extenedUser);

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// const list = document.querySelector('ul');
// list.remove();

function handleTimeout() {
  console.log('time out');
}

const handleTimeout2 = () => {
  console.log('time out ... again!');
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log('more Timing out...');
}, 4000);

function greeter(greetFn) {
  greetFn();
}

greeter(() => console.log('hi'));
