'use strict';

const http = require('http');
const url = require('url');

http
  .createServer((req, res) => {
    res.write(
      `Provide data in the given format => http://localhost:3000/?operator=...&num1=...&num2=...
      \nAvailable operations: add, sub, mul, div\n`
    );

    const queryObject = url.parse(req.url, true).query;
    const operator = queryObject.operator;
    const num1 = parseInt(queryObject.num1);
    const num2 = parseInt(queryObject.num2);

    if (num1 && num2 && operator) {
      switch (operator) {
        case 'add':
          res.end('\nResult is: ' + String(num1 + num2));
          break;
        case 'sub':
          res.end('\nResult is: ' + String(num1 - num2));
          break;
        case 'mul':
          res.end('\nResult is: ' + String(num1 * num2));
          break;
        case 'div':
          // if num2 === 0, nothing will happen
          res.end('\nResult is: ' + String(num1 / num2));
          break;
        default:
          res.end(
            '\nSomething is wrong with url please follow the given format'
          );
      }
    }
  })
  .listen(3000);
