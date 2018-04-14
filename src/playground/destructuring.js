// Objects

// const person = {
//   name: 'Nick',
//   age: 20,
//   location: {
//     city: 'Denver',
//     temp: 40
//   }
// }
//
// const { name: firstName = 'Anonymous', age } = person;
//
// console.log(`${firstName} is ${age}`);
//
// const { temp: temperature, city  } = person.location;
//
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// };
//
// const book = {
//   title: 'Silent Planet',
//   author: 'CS Lewis',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher
//
// console.log(`${publisherName}`);

// Arrays

const address = ['9803 w. 83rd ave', 'Arvada', 'CO', '80005'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}`);

const menu = ['Fat Cap', '2.00', '2.50', '3.00']

const [drink, , mediumPrice] = menu;

console.log(`medium ${drink} costs ${mediumPrice}`);
