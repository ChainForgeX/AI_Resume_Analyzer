const Resume = require("../models/Resume");
const { extractTextFromPDF } = require("../services/pdfService");
const { analyzeResume } = require("../services/aiService");

const uploadResume = async (req, res) => {

    try {

        const filePath = req.file.path;
        const resumeText = await extractTextFromPDF(filePath);
        const aiResponse = await analyzeResume(resumeText);
        const cleanedResponse = aiResponse
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();
        const analysis = JSON.parse(cleanedResponse);
        const savedResume = await Resume.create({
            fileName : req.file.filename,
            resumeText : resumeText,
            atsScore : analysis.atsScore,
            strengths : analysis.strengths,
            weaknesses : analysis.weaknesses,
            suggestions : analysis.suggestions
        });

        return res.status(201).json({
            message : "Resume Analyzed Successfully",
            id : savedResume._id,
            atsScore : analysis.atsScore,
            strengths : analysis.strengths,
            weaknesses : analysis.weaknesses,
            suggestions : analysis.suggestions
        });
    }
    catch (error) {
        console.log(error);

        res.status(500).json({
            message : error.message
        });
    }
};

const getResumes =
async(req,res)=>{

    try{
        const resumes = await Resume.find();
        res.status(200).json(resumes);

    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

module.exports = {
    uploadResume, getResumes
};