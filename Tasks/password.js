"use strict";
// Generate random password

let generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  const key;
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * max);
    key = key + alphabet[Index];
  }
  return key;
};

require('../Tests/password.js')(GeneratePassword);
