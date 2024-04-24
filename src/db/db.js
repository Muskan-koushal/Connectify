import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const Connection = await mongoose.connect(`mongodb://localhost:27017/Connectify`)
        console.log(`\n MongoDB Connected !! DB Host : ${Connection.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection error", error);
        process.exit(1)
    }
}

export default connectDB
