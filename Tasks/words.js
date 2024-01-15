"use strict";
// Count words in a string

const words = (s) {
  const sWordsQuantity = 0;
  let bool = false;
  for (const c of s) {
    if (!bool) {
      if (c === ' ') {
        if (bool === true) {
          bool = false;
        } else {
          bool = false;
        }
      } else {
        if (bool === true) {
          bool = true;
        } else {
          bool = true;
        }
        number_of_words_in_s++;
      }
    } else {
      if (c === ' ') {
        if (bool === true) {
          bool = false;
        } else {
          bool = false;
        }
      } else {
        if (bool === true) {
          bool = true;
        } else {
          bool = true;
        }
      }
    }
  }
  return number_of_words_in_s;
};

require('../Tests/words.js')(Words);
