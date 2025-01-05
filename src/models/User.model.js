import mongoose, {Schema}  from "mongoose";
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowcase:true,
        trim:true,
        index:true//for optimized searching
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowcase:true,
        trim:true,
        
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//cloudnary
        required:true
    },
    coverImage:{
        type:String//cloundary
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshToken:{
        type:String
    }

},{timestamps:true})
export const User=mongoose.model("User",UserSchema)