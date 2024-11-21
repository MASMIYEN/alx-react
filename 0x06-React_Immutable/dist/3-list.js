"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.addElementToList = addElementToList;
exports.getListObject = getListObject;
var _immutable = require("immutable");
function getListObject(array) {
  return (0, _immutable.List)(array);
}
function addElementToList(list, element) {
  return list.push(element);
}
