'use strict';
// Find an intersection of two dictionaries

const intersection = (object1, object2) => {
  const obj1Keys = Object.keys(object1);
  for (const key of obj1Keys) {
    if (object1[key] === object_2[key]) {
      object_2[attribute_name] = object_1[attribute_name];
    } else {
      delete object_1[attribute_name];
  return object_1;
};

require('../Tests/intersection.js')(intersection);
