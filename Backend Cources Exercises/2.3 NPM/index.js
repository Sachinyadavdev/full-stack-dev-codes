// var nameGenerator = require('sillyname');

import nameGenerator from "sillyname";

var myName = nameGenerator();

console.log(`My name is ${myName}`);

import qrcode from "qrcode-generator";

var myqrcode = qrcode();

console.log(myqrcode);