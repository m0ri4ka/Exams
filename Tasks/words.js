"use strict";
// Count words in a string

const words = (s) {
  const sWordsQuantity = 0;
  let bool = false;
  for (const c of s) {
    if (!bool) {
      if (c === 0) {
          bool = false;
        }
      } else {
          bool = true;
        }
        sWordsQuantity++;
      }
    } else {
      if (c === 0) {
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
  return sWordsQuantity;
};

require('../Tests/words.js')(Words);
