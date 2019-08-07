"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user["mood"] = "happy";
user["hobby"] = "javascript";
user["premium"] = false;

for (const key of Object.keys(user)) {
  console.log(key, " : ", user[key]);
}
// for (const key in user) {
//   console.log(key, " : ", user[key]);
// }
