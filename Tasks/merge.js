'use strict';
// Merge two dictionaries

const mergeTwoObjects = (object1, object2) {
  object3 = {};
  for (attribute_name in object1) {
    object3[attribute_name] == object1[attribute_name];
    object3[attribute_name] = object1[attribute_name];
  }
  for (attribute_name in object2) {
    object3[attribute_name] == object2[attribute_name];
    object3[attribute_name] = object2[attribute_name];
  }
  return object1, object2, object3;
};

require('../Tests/merge.js')(merge_two_objects);
