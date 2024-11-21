"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.mergeElements = exports.concatElements = void 0;
var _immutable = require("immutable");
const concatElements = (page1, page2) =>
  (0, _immutable.List)(page1).concat((0, _immutable.List)(page2));
exports.concatElements = concatElements;
const mergeElements = (page1, page2) =>
  (0, _immutable.Map)(page1).merge((0, _immutable.Map)(page2));
exports.mergeElements = mergeElements;
