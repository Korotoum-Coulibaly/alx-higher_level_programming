#!/usr/bin/node

const file = process.argv;
const fs = require('fs');

fs.writeFile(file[2], file[3], (err) => {
  if (err){
    throw err;
  }
});
