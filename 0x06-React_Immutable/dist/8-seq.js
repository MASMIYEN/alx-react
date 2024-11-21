"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = printBestStudents;
var _immutable = require("immutable");
function printBestStudents(object) {
  const seq = (0, _immutable.Seq)(object);
  const filtered = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });
  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const JSObject = filtered.toJS();
  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName = capFirstLetter(JSObject[key].firstName);
    JSObject[key].lastName = capFirstLetter(JSObject[key].lastName);
    return JSObject[key];
  });
  console.log(JSObject);
}
