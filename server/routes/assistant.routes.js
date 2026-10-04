import express from "express";
import askGroq from "../services/groq.service.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                message: "Message is required",
            });
        }

        const response = await askGroq(message);

        res.status(200).json({
            response,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
        });
    }
});

export default router;
