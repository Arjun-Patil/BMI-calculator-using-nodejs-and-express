const express = require("express");

const bp = require("body-parser");

const app = express();

app.use(bp.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmiHome.html");
});

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});


app.post("/bmiCalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
      var height = parseFloat(req.body.height);
      var BMI = weight / (height * height);
      res.send("Your BMI is : "+ BMI)
})
app.listen(3000,function(){
  console.log("Server started at port 3000");
});
