import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true,
        unique: true
    },
    password:{
        type: String
    },
    contact:{
        type: Number,
        trim: true
    },
    requestCard:[
        {
            userId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            },
            businessId:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"business"
            },
            datingId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"dating"
           },
           eventId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"event"
           },
           appointmentId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"appointment"
           },
           teacherId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"teacher"
           }
        }
    ]
},{versionKey: false});


export const User = mongoose.model("user",userSchema);