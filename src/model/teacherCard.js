import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    teacherAge:{
        type: Number,
        trim: true,
        require:true
    },
    teacherName:{
        type: String,
        trim: true,
        require:true
    },
    teacherGender:{
        type: String,
        trim: true,
        require:true
    },
    teacherDob:{
        type: String,
        trim: true
    },
    teacherQualification:{
        type: String,
        trim: true,
        require:true
    },
    teacherExperienceYear:{
        type: Number,
        trim: true,
    },
    teacherSubject:{
        type: String,
        trim: true
    },
    teacherInstitution:{
        type: String,
        trim: true
    },
    teacherInstitutionType:{
        type: String,
        trim: true,
    },
    teacherInstitutionAddress:{
        type: String,
        trim: true
    },
    teacherInstagramLink:{
        type: String,
        trim: true
    },
    teacherFacebookLink:{
        type: String,
        trim: true
    },
    teacherTwitterLink:{
        type: String,
        trim: true
    },
    teacherLinkedInLink:{
        type: String,
        trim: true
    },
    teacherPhoto:{
        type: String,
        trim: true
    }
},{versionKey: false});

export const Teacher = mongoose.model("teacher",teacherSchema);
