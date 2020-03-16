const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const path = require("path");

const db = require("./db");
const collection = "Employee";

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'empDetail.html'));
});
app.get('/getEmployees',(req,res)=>{
    db.getDb().collection(collection).find({}).toArray((err,documents)=>{
        if(err)
        console.log(err);
        else{
            console.log(documents);
            res.json(documents);
        }

    });
});


app.put('/:id',(req,res)=>{
    const EmployeeID = req.params.id;
    const  userInput = req.body;



    db.getDb.collection(collection).findOneAndUpdate({_id : db.getPrimaryKey(EmployeeID)},{$set : {Employee : userInput.Employee}},{returnOrignal : false},(err,result)=>{
        if(err)
        console.log(err);
        else
        res.json(result);
    });
});



app.post('/',(req,res)=>{

    const userInput = req.body;
    db.getDb().collection(collection).insertOne(userInput,(err,result)=>{
        if(err)
        console.log(err);
        else
            res.json({result : result, document : result.ops[0]});

        
    });
});

app.delete('/:id',(req,res)=>{

    const EmployeeID = req.params.id;
    db.getDb().collection(collection).findOneAndDelete({_id : db.getPrimaryKey(EmployeeID)},(err,result)=>{
        if(err)
        console.log(err);
        else
        res.json(result);
    });
});



db.connect((err)=>{
    if(err){
    console.log("Unable to connect");
    process.exit(1);
           }
           else
           {
               app.listen(10000,()=>{
                   console.log("Connected");
               });
           }
           
})