const mongoose= require("mongoose")
const {ObjectId}=mongoose.Schema.Types

const groupSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    members:[
        {user:{
        type:ObjectId,
        ref:"User" 
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

mongoose.model("Group",groupSchema);

//QeK89eWakFOGRtk9