'use strict';
// Merge two dictionaries

const mergeTwoObjects = (object1, object2) => {
  mergedObject = {};
  for (const  in object1) {
    object3[attributeName] = object1[attributeName];
  }
  for (attributeName in object2) {
    object3[attributeName] = object2[attributeName];
  }
  return object1, object2, object3;
};

require('../Tests/merge.js')(merge_two_objects);
