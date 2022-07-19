require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const connection =require('./db');
const path =require('path');
const port =process.env.PORT || 8080;
const { User } = require('./models/user.js')
const {Classroom}=require('./models/classroom')
const {Doubt}=require('./models/doubt')

//connect to databse
connection()

// middlewares
app.use(express.json());
app.use(cors());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})
app.use(express.static(path.join(__dirname, '/client')));

//routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/client/build', 'index.html'));
  });


app.post("/login", (req, res)=> {
    const { email, password} = req.body
  
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.status(200).send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 


app.post("/register", (req, res)=> {
    

    const { firstName,lastName, email,password} =req.body


    User.findOne({email: email}, (err, user) => {
        // console.log(user)
        if(user){
            res.send({message: "registered"})
        } else {
            const user =new User({
                firstName:firstName,
                lastName: lastName,
                email:email,
                password:password,
          
                })
                user.save()
                .then((result)=>{res.send(result)})
           
                .catch((err)=>{console.log("error "+ err)})
        }
    })
    
}) 

app.post("/class/create", (req, res)=> {
    

    const { name, email,className} =req.body
   

    const classroom =new Classroom({
        name:name,
        email:email,
        className:className,
  
        })
       classroom.save()
        .then((result)=>{res.send(result)})
   
        .catch((err)=>{console.log("error "+ err)})
    
}) 

app.post("/class/join", (req, res) => {
    const { email,_id} = req.body
    console.log(req.body)
    


Classroom.findOne({ _id : _id}, (err,classroom) => {
    if(classroom){
        const classId=classroom._id.valueOf()
        // console.log(classroom._id.valueOf())
        if(_id === classId ) {
            // res.send({message: "Join Successfull"})

if(email===classroom.email){
return  res.send({type: "Teacher"})
}else{
return res.send({type: "Student"}) 
}

        } else {
           return res.send({ message: "ID didn't match"})
        }
    } else {
      return  res.send({message: "Classroom does not exist"})
    }
 });

// 



   
  });


//   doubts
app.post("/doubts", (req, res)=> {
    

    const { title,description,answer,comments,askedBy,resolved} =req.body

console.log(title)

            const doubt = new Doubt({
                title: title,
                 description: description,
                 answer:answer,
                 comments:comments,
                 askedBy:askedBy,
                 resolved:resolved
                })
                doubt.save()
                .then((result)=>
                res.send({message: "Sent Successfully"})
                // res.send(result)
                )
           
                .catch((err)=>{console.log("error "+ err)})
      
   
    
}) 
//all doubts
app.get('/doubts/all-doubts',(req,res)=>{
   
   Doubt.find().sort({createdAt : -1})
    .then((result)=>{res.send(result)})
    .catch((err)=>{console.log(err)})
    
})
app.get('/doubts/:id',(req,res)=>{
    let id=req.params.id;
    Doubt.findById(id)
     .then((result)=>{res.send(result)})
     .catch((err)=>{console.log(err)})
     
 })
//add-comment
//all doubts
app.post('/doubts/add-comment/:id',(req,res)=>{

    const {comment} =req.body
    let id=req.params.id;
    console.log(comment)

    Doubt.findOne({ "_id":id},(err, doubt) => {
    //  .then((result)=>{
        // result.comments.push(comment)
        console.log(doubt)
        doubt.comments.push(comment)
        
        // result.comments != 
        
    //   })
     
    
     doubt.save()
     .then((result)=>{ res.send(result)  })
     .catch((err)=>{console.log(err)})
    })
 })


 app.post('/doubts/add-answer/:id',(req,res)=>{

    const {answer} =req.body
    let id=req.params.id;


    Doubt.findByIdAndUpdate({ "_id":id},{ $set:{
        answer:answer,
        resolved:true
    }})


     .then((result)=>{ res.send(result)  })
     .catch((err)=>{console.log(err)})
    })



app.listen(port,()=>console.log("listening to port " + port));