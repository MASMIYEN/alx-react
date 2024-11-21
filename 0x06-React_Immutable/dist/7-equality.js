"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = areMapsEqual;
var _immutable = require("immutable");
function areMapsEqual(map1, map2) {
  return (0, _immutable.is)(map1, map2);
}
