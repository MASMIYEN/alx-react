"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.map2 = exports.map = void 0;
var _immutable = require("immutable");
const map = (exports.map = (0, _immutable.Map)({
  1: "Liam",
  2: "Noah",
  3: "Elijah",
  4: "Oliver",
  5: "Jacob",
  6: "Lucas",
}));
const map2 = (exports.map2 = map.withMutations((values) => {
  values.set(2, "Benjamin").set(4, "Oliver");
}));
