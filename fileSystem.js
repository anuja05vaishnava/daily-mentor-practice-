var fs = require('fs');


fs.readFile('source.js', bar)

function bar (err, value)
  {
 
  err ? Function("error","throw error")(err) : console.log("Content of file", ":",(value.toString('utf8')) );
  };





fs.copyFile('source.js', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('Content of file copied to destination.txt');
});



fs.readFile('destination.txt', copy)

function copy (err, data)
  {
 
  err ? Function("error","throw error")(err) : console.log("Content of copied file", ":",(data.toString('utf8')) );
  };
