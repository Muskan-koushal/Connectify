import mongoose from "mongoose";

const datingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    datingDob:{
        type: String,
        trim: true,
        require:true
    },
    datingAge:{
        type: Number,
        trim: true
    },
    datingName:{
        type: String,
        trim: true,
        require:true
    },
    datingGender:{
        type: String,
        trim: true,
        require:true
    },
    datingOccupation:{
        type: String,
        trim: true
    },
    datingAddress:{
        type: String,
        trim: true,
        require:true
    },
    datingEducation:{
        type: String,
        trim: true,
        require:true
    },
    datingHobby:{
        type: String,
        trim: true
    },
    datingContact:{
        type: Number,
        trim: true
    },
    datingPartnerAgeRange:{
        type: Number,
        trim: true,
        require:true
    },
    datingRelationShipStatus:{
        type: String,
        trim: true
    },
    datingHeight:{
        type:Number,
        trim:true
    },
    datingReligion:{
        type:String,
        trim:true
    },
    datingNationality:{
        type: String,
        trim: true
    },
    datingCaste:{
        type: String,
        trim: true
    },
    datingInstagramLink:{
        type: String,
        trim: true
    },
    datingFacebookLink:{
        type: String,
        trim: true
    },
    datingTwitterLink:{
        type: String,
        trim: true
    },
    datingLinkedInLink:{
        type: String,
        trim: true
    },
    datingPhoto:{
        type: String,
        trim: true
    }
},{versionKey: false});

export const Dating = mongoose.model("dating",datingSchema);
