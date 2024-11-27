import mongoose from "mongoose";
import { conf } from "./config.js";

const connectDB = async () => {

    try {


        mongoose.connection.on('connected',()=>{
         console.log('database connection success');
         
        });
        mongoose.connection.on('error',(err)=>{
         console.log('error in database connection ',err);
         
        });
       await mongoose.connect(conf.dbUrl );


    } catch (error) {
        console.log('failed to connect to db');
        process.exit(1)
        
    }
    
}

export default connectDB