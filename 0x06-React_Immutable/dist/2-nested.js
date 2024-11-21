"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = accessImmutableObject;
var _immutable = require("immutable");
function accessImmutableObject(object, array) {
  const mappedObj = (0, _immutable.fromJS)(object);
  return mappedObj.getIn(array, undefined);
}
