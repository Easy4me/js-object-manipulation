// sculptureScript.js
// Create an object with sculpture names and their lengths

const sculptureList = require('./data.js');

const sculptureListLengths = {};

sculptureList.forEach(sculpture => {
  sculptureListLengths[sculpture.name] = sculpture.name.length;
});

console.log(sculptureListLengths);
