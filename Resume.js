const mongoose = require("mongoose");
const resumeSchema = new mongoose.Schema(
    {
        fileName : {
            type : String,
            required : true
        },

        resumeText : {
            type : String,
            required : true
        },

        atsScore : {
            type : Number,
            default : 0
        },

        strengths : {
            type : [String],
            default : []
        },

        weaknesses : {
            type : [String],
            default : []
        },

        suggestions : {
            type : [String],
            default : []
        }
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model("Resume", resumeSchema);