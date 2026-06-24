const {GoogleGenerativeAI} = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("GEMINI API KEY"); //API KEY
const analyzeResume = async(resumeText)=>{
    const model = genAI.getGenerativeModel({model:"gemini-2.5-flash"});
    const prompt = 
    `You are an ATS Resume Analyzer.

    Analyze the resume and return ONLY valid JSON.

    Do NOT return markdown.
    Do NOT return explanation text.
    Do NOT write anything before or after JSON.

    Format:
    {
        "atsScore": 0,
        "strengths": [],
        "weaknesses": [],
        "suggestions": []
    }
    Resume : ${resumeText}`;

    try{
        const result = await model.generateContent(prompt);
        const response = result.response.text();

        console.log("Gemini Raw Response:");
        console.log(response);

        return response;
    }
    catch(error){
        console.log("Gemini Error:", error.message);
        throw error;
    }
};

module.exports = {analyzeResume};