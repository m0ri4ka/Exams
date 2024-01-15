"use strict";
// Generate random password

let generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * MAX);
    key = key + alphabet[Index];
  }
  return key;
};

require('../Tests/password.js')(GeneratePassword);
