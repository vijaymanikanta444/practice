var persons = [
  { name: 'harish', age: 29 },
  { name: 'deepthi', age: 30 },
  { name: 'vijay', age: 22 },
  { name: 'jyosthna', age: 27 },
];

const sort = persons.sort((a, b) => a.name - b.name);
console.log(sort);

const list = persons.filter((person) => person.age.toString().includes(3));
console.log(list);

let person = { name: 'deepthi', age: 30 };
var key = 'age';
console.log(person[key]);

const age1 = persons.sort((a, b) => a.age - b.age);
const age2 = persons.sort((a, b) => b.age + ''.localeCompare(a.age + ''));

console.log(age1, age2);
