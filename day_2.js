// var person = {
//   name: 'vijay',
//   age: 23,
// };

// console.log(person);
// console.log(person.name);

// person.qualification = 'B.Tech';
// person = { ...person, qualification: 'B.Tech' };

// console.log(person);

// function intro({ name, qualification }) {
//   console.log(name + ' quailification is ' + qualification);
//   console.log(`${name} Qualification is ${qualification}`);
// }

// intro(person);

// var list = [1, 2, 3, 4, 5];

// console.log(list);
// console.log(list[0]);
// list[5] = 6;
// console.log(list);
// list[list.length] = 7;
// console.log(list);
// list.push(8);
// console.log(list);

// list = list.concat(9);
// list = [...list, 9];
// console.log(list);
// console.log(newList);

// for (var i = 0; i < list.length; i++) {
//   console.log(list[i] + 10);
// }

// for (var n in list) {
//   console.log(list[n] + 10);
// }

// list.forEach((n) => console.log(n + 10));

// var persons = ['vijay', 'reshma', 'paramesh', 'jyotshna'];

// persons.forEach((name, i) => console.log(i + 1 + ' ' + name));
// persons.forEach((name, i) => console.log(`${i + 1} ${name}`));

// var gentlemen = ['paramesh', 'harish', 'vijay', 'praveen'];

// var gentlemenList = gentlemen.map((name) => 'Mr ' + name);
// console.log(gentlemenList);

// var gentlemenList = gentlemen.map((name) => ({ name: name, gender: 'male' }));
// console.log(gentlemenList);

/******************************* 
//Practice
var fruits = ['apple', 'grapes'];
console.log(fruits);
console.log(Object.keys(fruits));

fruits.push('orange');
console.log(fruits);
console.log(Object.keys(fruits));

fruits[3] = 'banana';
console.log(fruits);
console.log(Object.keys(fruits));

fruits[5] = 'kiwi';
console.log(fruits);
console.log(Object.keys(fruits));
console.log(fruits.length);

fruits.forEach((fruits) => console.log(fruits));
fruits.forEach((fruits, i) => console.log(i + 1 + ' ' + fruits));
fruits.forEach((fruits, i) => console.log(`${i + 1} ${fruits}`));

var fruitsList = fruits.map((fruits) => ({ name: fruits, type: 'good' }));
console.log(fruitsList);
console.log(fruits[4]);

var fruitsList = fruits.map((fruits) => ({ name: fruits }));
console.log(fruitsList);

// console.log('vijay');
*/
