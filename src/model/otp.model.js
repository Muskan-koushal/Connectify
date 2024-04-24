import mongoose from "mongoose";

// OTP Schema
const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 600 // OTP expires after 10 minutes (600 seconds)
    }
});

// OTP Model
const OTP = mongoose.model('otp', OTPSchema);

// Function to store OTP in database
const storeOTP = async (email, otp) => {
    try {
        // Create a new OTP document
        const newOTP = new OTP({
            email,
            otp
        });

        // Save the OTP document to the database
        await newOTP.save();
    } catch (error) {
        console.error('Error storing OTP:', error);
        throw error;
    }
};

// Function to retrieve OTP from database
const retrieveOTP = async (email) => {
    try {
        // Find the OTP document by email
        return await OTP.findOne({ email });
    } catch (error) {
        console.error('Error retrieving OTP:', error);
        throw error;
    }
};

export { OTP, storeOTP, retrieveOTP };
