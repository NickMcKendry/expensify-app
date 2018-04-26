const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Nick',
      age: 20
    })
    // reject('Something went wrong');
  }, 5000)
});

console.log('before');

promise.then((data) => {
  console.log(data);

  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2')
      // reject('Something went wrong');
    }, 5000)
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log(error);
});



console.log('after');
