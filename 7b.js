'use strict';

const fs = require('fs');

function printContent(path) {
  fs.watch(path, (event, filename) => {
    if (event === 'change') {
      fs.readFile(path, (error, content) => {
        if (error) {
          console.log(`error! ${error}`);
        } else {
          console.log(`File ${filename} was modified`);
          console.log(`Content of ${filename}: \n${content}`);
        }
      });
    }
  });
}
printContent('./test.txt');
