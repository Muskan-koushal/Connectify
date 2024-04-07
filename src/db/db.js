import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const Connection = await mongoose.connect(`mongodb+srv://mouryamohitsingh:mohitrajput13@cluster0.qntedln.mongodb.net/`)
        console.log(`\n MongoDB Connected !! DB Host : ${Connection.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection error", error);
        process.exit(1)
    }
}

export default connectDB
