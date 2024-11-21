"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = getImmutableObject;
var _immutable = require("immutable");
function getImmutableObject(object) {
  return (0, _immutable.fromJS)(object);
}
