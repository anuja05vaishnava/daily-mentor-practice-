const readline=require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
    console.log("Enter the size and names with spaces : ");
      rl.on('line', (input) => {
        console.log(`Received: ${input}`);
        var string=input.split(" ");
        console.log(string);
        console.log("===============");
	var size=string[0];
         var x= size;
         var flag=0;
         if(size%2==0)
{
       for (j=1;j<size*size;j=j+1)
       {
            var temp = j*size;
         console.log(string[temp]);
             console.log(string[temp]);
         
               
          if(string[temp]===string[temp+1])
            {
               flag=1;
             }
          else
          {
		flag=2;
	  }
       }

      
      
}
if(size%2!=0)
{
       for (i=1;i<size*size;i++)
       {   
          console.log(string[i]);
          if(string[i]==string[i+1])
            {
               flag=3;
             }
          else
          {
		flag=4;
	  }
       }
}

 console.log(flag);  
if(flag==1||flag==4)
{

console.log("YES");
}
else
{

console.log("NO");
}
});
