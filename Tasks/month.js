"use strict";
// Get month number

months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

month = (m) => {
  const length = months.length;
  for (let i = 0; i < length; i++) {
    if (m.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

require('../Tests/month.js')(month);
