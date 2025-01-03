// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config(
   {
    path: "./env",
   } 
)

connectDB()














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
   