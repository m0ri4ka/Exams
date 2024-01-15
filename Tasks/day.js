'use strict';
// Get day number

const Day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = day => {
  for (let i = 0; i < Day.length; i++) 
    if (day.startsWith(Day[i])) return i + 1;
  return -1;
};

require('../Tests/day.js')(parseDay);
