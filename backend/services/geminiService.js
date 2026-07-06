const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});

const generateFeedback = async (student) => {

    const prompt = `
You are an expert academic mentor.

Analyze the following student's performance.

Student Details:

Name: ${student.name}

Attendance: ${student.attendance}%

Internal Marks: ${student.internal_marks}

Assignment Marks: ${student.assignment_marks}

Prediction: ${student.prediction}

Respond ONLY in the following format:

## Overall Performance
(2-3 lines)

## Strengths
- Point 1
- Point 2

## Areas to Improve
- Point 1
- Point 2

## Study Suggestions
- Point 1
- Point 2

Keep the response under 120 words.
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
};

module.exports = generateFeedback;