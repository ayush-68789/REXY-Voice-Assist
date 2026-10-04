import express from "express";
import cors from "cors";
import 'dotenv/config';

import assistantRoutes from "./routes/assistant.routes.js";


const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
    }),
);

app.use(express.json());

app.use("/api/assistant", assistantRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Rexy server is running",
    });
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Rexy server running on port ${PORT}`);
}); 