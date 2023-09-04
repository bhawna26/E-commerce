require("dotenv").config();
const mongoose=require("mongoose");


const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("db working successfully");
    } catch (error) {
        console.log("not working db");
        process.exit(1);
    }
}

module.exports=connectDB;