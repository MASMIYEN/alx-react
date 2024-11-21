"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = mergeDeeplyElements;
var _immutable = require("immutable");
function mergeDeeplyElements(page1, page2) {
  return (0, _immutable.Map)(page1).mergeDeep((0, _immutable.Map)(page2));
}
