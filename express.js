const express = require("express");              //i have requireexpress to use it //
const fs = require("fs");                   //i am going to work on file system so i require fs as well //
// const bodyparser=require("body-parser");        // i am going to take perticulary data so for that i am using body parser //
var app = express()                 //i have store express in one variable so no need to require again and again //
const details = require('./data.json');

fs.readFile("data.json",function(err,data){    
    
    if (err) throw err;
        const users = JSON.parse(data);    //to come in javascript object we use parse because data is in string//
        // console.log(users)

    // app.use(bodyparser.urlencoded({extended:true}));

    app.get('/',function(req,res){
        details=users["Students_data"]
        for( i of details){
            console.log(i["name"]) 
            // res.send(del)
        }
    });
    
    app.post("/post",function(req,res){
        var obj = {
            "name":"komal kumari",
            "age":34,
            "qualification":"IT Student",
            "birthday":"23 jan"
        }
        // details.push(obj)
        fs.writeFile('data.json',JSON.stringify(obj),err =>{
            if(err) throw err;
            console.log("done writeing")
        }); 
    })


    app.delete("/delete",(req,res)=>{
        var delete_data=req.params.name
        // console.log(delete_data)  //{} and undefined//
        var varx=req.body
        // console.log(varx)   undefined 

        var delete_method = delete ['Student_data']
        // console.log(delete_method)  true //

        fs.writeFile('data.json',JSON.stringify(delete_method),err=>{
            if(err){
                res.send(err)
                console.log(err)
            }
            else{
                res.send("data delete")
                console.log(delete_method )
            }
        })
    });

    app.put("/update",function(req,res){
        var update_data = req.params.update_data
        var new_data = req.body

        details[update_data-1] ['name'] = new_data.name
        details[update_data-1] ['age'] = new_data.age
        details[update_data-1] ['qualification'] = new_data.qualification
        details[update_data-1] ['birthday'] = new_data.birthday

        fs.writeFile("data.json",JSON.stringify(details),err=>{
            if(err){
                res.send(err)
                console.log(err)

            }else{
                res.send("done updateing...")
                console.log("")
            }
        })
    })


})
app.listen(2000,function(req,res){
    console.log("server is running at the port number 2000")
});




