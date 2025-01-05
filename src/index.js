// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config(
   {
    path: "./env",
   } 
)
connectDB().then(()=>{
  app.listen(process.env.PORT||8000,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
  })
})
.catch((error)=>{
  console.log("CONNECTION FAILED",error)
})














/*
const app=express()
//async await
//try catch
;(async ()=>{
try{
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  app.on("error",(error)=>{
    console.log("ERROR",error)
    throw error
  })

  app.listen(process.env.PORT,()=>{
    console.log(`APP LISTENING AT ${process.env.PORT}`);
    
  })
}catch(error)
{console.error("ERROR ",error);
    throw err}
})()
    */
   