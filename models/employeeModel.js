var mongoose=require('mongoose')

var employeeSchema=new mongoose.Schema(
    {

   code:{
type:Number,
required:true

   },
   name:{
type:String,
required:true
   },
   designation:{
    type:String,
    required:true
   },
   salary:{
type:Number,
required:true

   },
   company:{
type:String,Number,
required:true

   }


}
)


var employeeModel=mongoose.model('employees',employeeSchema)

module.exports={employeeModel}