const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});

const generateFeedback = async (student) => {

    const prompt = `
You are an academic mentor.

Student Details

Name: ${student.name}

Attendance: ${student.attendance}

Internal Marks: ${student.internal_marks}

Assignment Marks: ${student.assignment_marks}

Prediction: ${student.prediction}

Give:

1. Overall Performance
2. Strengths
3. Weaknesses
4. Study Suggestions

Keep the response under 120 words.
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
};

module.exports = generateFeedback;