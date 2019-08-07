"use strict";

const countProps = object => {
  let counter = 0;
  for (const prop in object) {
    counter++;
  }
  return counter;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
