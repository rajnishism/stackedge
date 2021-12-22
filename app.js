const express = require("express");
const app = express();
app.use(express.static(__dirname+"assets"));
app.get("/",function(req,res){
  res.sendFile( __dirname+"/index_2.html" , function(err){
    if (err) {

        } else {
            console.log('Sent:')

        }
  })
})

app.post('/',function(req,res){
console.log("sent successfully")
})
app.listen(3000, function(){
  console.log("server started");

})
