import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
    businessId:{
        type:Number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    businessName:{
        type: String,
        trim: true,
        require:true
    },
    businessEmail:{
        type: String,
        trim: true,
        unique: true,
        require:true
    },
    businessType:{
        type: String,
        trim: true
    },
    businessAddress:{
        type: String,
        trim: true,
        require:true
    },
    businessContact:{
        type: Number,
        trim: true,
        require:true
    },
    businessOptionNumber:{
        type: Number,
        trim: true
    },
    businesslandlineNumber:{
        type: Number,
        trim: true
    },
    businessEstablishYear:{
        type: Number,
        trim: true,
        require:true
    },
    businessWebsiteUrl :{
        type: String,
        trim: true
    },
    businessGstNo:{
        type:Number,
        trim:true
    },
    businessAbout:{
        type:Text,
        trim:true
    },
    businessInstagramLink:{
        type: String,
        trim: true
    },
    businessFacebookLink:{
        type: String,
        trim: true
    },
    businessTwitterLink:{
        type: String,
        trim: true
    },
    businessLinkedInLink:{
        type: String,
        trim: true
    },
    businessLogo:{
        type: String,
        trim: true
    },
    businessPhoto:{
        type: String,
        trim: true
    }
},{versionKey: false});

export const Business = mongoose.model("business",businessSchema);
