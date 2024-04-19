import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    appointmentId:{
        type:Number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    appointmentName:{
        type: String,
        trim: true,
        require:true
    },
    appointmentTime:{
        type: String,
        trim: true
    },
    appointmentContact:{
        type: Number,
        trim: true,
        require:true
    },
    appointmentEmail:{
        type: String,
        trim: true,
        require:true
    },
    appointmentAddress:{
        type: String,
        trim: true,
        require:true
    },
    appointmentEmergencyNumber:{
        type: Number,
        trim: true,
    },
    appointmentInstagramLink:{
        type: String,
        trim: true
    },
    appointmentFacebookLink:{
        type: String,
        trim: true
    },
    appointmentTwitterLink:{
        type: String,
        trim: true
    },
    appointmentLinkedInLink:{
        type: String,
        trim: true
    },
    appointmentPhoto:{
        type: String,
        trim: true
    }
},{versionKey: false});

export const Appointment = mongoose.model("appointment",appointmentSchema);
