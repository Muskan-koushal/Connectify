import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventId:{
        type:Number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    eventName:{
        type: String,
        trim: true,
        require:true
    },
    eventTime:{
        type: String,
        trim: true,
        require:true
    },
    eventDate:{
        type: String,
        trim: true,
        require:true
    },
    eventContact:{
        type: String,
        trim: true,
        require:true
    },
    eventSponserName:{
        type: String,
        trim: true,
        require:true
    },
    eventAddress:{
        type: String,
        trim: true,
        require:true
    },
    eventAbout:{
        type: Text,
        trim: true,
    },
    eventInstagramLink:{
        type: String,
        trim: true
    },
    eventFacebookLink:{
        type: String,
        trim: true
    },
    eventTwitterLink:{
        type: String,
        trim: true
    },
    eventLinkedInLink:{
        type: String,
        trim: true
    },
    eventPhoto:{
        type: String,
        trim: true
    }
},{versionKey: false});

export const Event = mongoose.model("event",eventSchema);
