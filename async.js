
var user = {
     first_name: "Anuja",
     last_name: "vaishnava",
     age: 4
     website: "anuja.vaishnava"
};

for (key in user) {
     console.log(key);
}

var async = require("async");
 var stack=[];
function functionone(callback)
{



callback(null,"first");
}

function functionsec(callback)
{



callback(null,"second");
}
function functionthree(callback)
{



callback(null,"three");
}
stack.push(functionone);
stack.push(functionsec);
stack.push(functionthree);

async.parallel(stack,function (error,result){

console.log(result);


});

const buf = Buffer.from('hello world', 'ascii');
console.log(buf);


const buf = Buffer.from('buffer');

for (const pair of buf.entries()) {
  console.log(pair);
}

