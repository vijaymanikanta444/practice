// let friends = ['harish', 'vijay', 'rishi'];

// let display = (f) => {
//   console.log(f);
// };

// friends.forEach(display);

// friends.forEach((f) => {
//   console.log(f);
// });

// friends.forEach((f) => console.log(f));
// friends.forEach((f) => console.log(f));

// friends.forEach(show);

// function show(f) {
//   console.log(f);
// }

/******* MAP */

// mister = (f) => {
//   return 'Mr. ' + f;
// };

// let list = friends.map(mister);
// // let list = friends.map((f) => 'Mr. ' + f); // INLINE function

// console.log(list);

let friends = [
  { fname: 'harry', lname: 'potter', age: 12 },
  { fname: 'rishi', lname: 'kumar', age: 25 },
  { fname: 'vijay', lname: 'manikanta', age: 20 },
];

// let list = friends.map((f) => {
//   return `${f.fname}` + ' ' + `${f.lname}`;
// });

// let list = friends.map((f) => f.fname + ' ' + f.lname);
let list = friends.map((f) => f);
// let majors = friends.map((f) => f.age > 18);
/** filter */
// let majors = friends.filter((f) => f.age > 18);
// let minors = friends.filter((f) => f.age < 18);
/**find */
let minors = friends.find((f) => f.age < 18);

// console.log(list);
// console.log(majors);
// console.log(majors[0], majors[1]);
// console.log(minors);
// console.log(minors[0]);
console.log(minors);

/******* */
