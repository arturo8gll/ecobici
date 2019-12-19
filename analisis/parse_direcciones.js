const fs = require('fs')

let rawdata = fs.readFileSync('./direcciones.json');
let student = JSON.parse(rawdata);
console.log(student);