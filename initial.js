const readline=require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
    console.log("Enter the size and names with spaces : ")
      rl.on('line', (input) => {
        console.log(`Received: ${input}`);
        var string=input.split(" ");
        console.log(string);
        console.log("===============");
       for(i in string)
       {
           console.log("Element : "+string[i]);
       }
       var size=string[0];
       var name=string[1];
       var count=0;
       var count_val=0;
       console.log("the size of the list : "+size);
       for(val=1;val<size;val++)
       {
            var temp=name.substr(0,++count);
           
       }
   
     
  });
