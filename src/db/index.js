import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async function () {
try{
 const connectionINstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 console.log(`\n MONGOBD CONNECTED !! DB HOST: ${connectionINstance.connection.host}`);
 
}catch(error){
    console.log("MONGO DB CONNECTION FAILED" ,error)
    process.exit(1)
}
    
}
export default connectDB