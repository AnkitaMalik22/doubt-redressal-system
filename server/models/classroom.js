const mongoose =require('mongoose');


const classSchema=new mongoose.Schema({

   
    name :{type:String,required:false},
    email :{type:String,required:false},
  className :{type:String ,required:true},


})

const Classroom = mongoose.model("Classroom",classSchema)


module.exports = {Classroom}