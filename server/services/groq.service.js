import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const askGroq = async (message) => {
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content:
                    "You are Rexy, a helpful and concise personal voice assistant.",
            },
            {
                role: "user",
                content: message,
            },
        ],
        model: process.env.GROQ_MODEL,
    });

    return completion.choices[0].message.content;
};

export default askGroq;