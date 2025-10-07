import mongoose from "mongoose"

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED SUCCESSFULLY");
     } catch(error){
        console.log("ERROR CONECTING TO MONGODB", error);
        process.exit(1) 
    }
}