const express=require("express");
const date=require(__dirname+"/date.js")  // importing a module called date.js 
const app=express();

var items=["Buy Food","Cook Food","Eat Food"];
var workItem=[];

 
app.set("view engine","ejs");
app.use(express.static("Public"));
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){

    let day = date.getDate(); // calling a module that we imported
    res.render("list",{listTitle:day,newlistItem:items})

})

app.post("/",function(req,res){

   let item=req.body.newItem;

    if(req.body.list==="Work"){  // here list is the name of the button and work is the value 
        workItem.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item)
        res.redirect("/");
    }

})

// WORK ITEM new todo list

app.get("/work",function(req,res){
    res.render("list",{listTitle:" Work LIST ",newlistItem:workItem})
});

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(process.env.PORT || 3000,function(){
    console.log("Server running on PORT 3000")
});