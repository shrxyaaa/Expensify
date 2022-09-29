const mongoose= require("mongoose")
const {ObjectId}= mongoose.Schema.Types


const userSchema= new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
    dp:{
      type:String,
      default:""
     },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   groups:[{
    group:
        {
        type:ObjectId,
        ref:"Group" 
      },
    owes:{
        type:mongoose.Schema.Types.Decimal128,
        default:'00.0'
       },
    isOwed:{
        type:mongoose.Schema.Types.Decimal128,
        default:'00.0'
       }  
    }
   ]
})
mongoose.model("User",userSchema);