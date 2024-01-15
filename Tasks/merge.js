'use strict';
// Merge two dictionaries

const mergeTwoObjects = (object1, object2) => {
  mergedObject = {};
  for (const value1 in object1) { mergedObject[value] = object1[value]; }
  for (const value2 in object2) { mergedObject[value] = object2[value]; }
  return object1, object2, mergedObject;
};

require('../Tests/merge.js')(merge_two_objects);
