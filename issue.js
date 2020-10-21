var details = {
  1: { name: 'Vijay', age: 22 },
  2: { name: 'Harish', age: 19 },
  3: { name: 'Rishi', age: 20 },
  a6: { name: 'Parmesh', age: 21 },
};

// console.log(details.a6.name);

var data = [
  { name: 'Vijay', age: '22' },
  { name: 'Harish', age: 19 },
  { name: 'Rishi', age: 20 },
  { name: 'Parmesh', age: 21 },
];
// console.log(data[0].name);

// data.forEach((list) => console.log('Mr ' + `${list.name}`));
// data.map((list) => console.log('Mr ' + `${list.name}`));

// console.log(details);

// console.log(details[1].name);
// console.log(details[2].name);
// console.log(details[3].name);
// console.log(details.a6.name);

// console.log(Object.keys(details));

var keys = Object.keys(details);

keys.forEach((key) => console.log('Mr ' + details[key].name)); //by using Object.Keys

// console.log(keys(details));

// console.log(Object.values(details));
// console.log(Object.values(Object.values(details)));
// console.log(Object.values(details)[0].name);

Object.values(details).forEach((element) => console.log('Mr ' + element.name)); // by using Object.value
