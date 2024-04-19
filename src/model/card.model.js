import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    mycard:[
        {
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
});

export const Card = mongoose.model("card",cardSchema);