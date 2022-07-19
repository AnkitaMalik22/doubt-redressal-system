const mongoose =require('mongoose');


const doubtSchema=new mongoose.Schema({

   
   title:{type:String,required:true},
   description :{type:String,required:true},
   answer:{type:String,required:false},
   comments: [{type:String,comment:String}],
   askedBy:{type:String,required:false},
   resolved:{type:Boolean,required:true}
 


},{timestamps:true})

const Doubt = mongoose.model("Doubt",doubtSchema)


module.exports = {Doubt}