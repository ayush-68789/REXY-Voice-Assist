import { useState } from "react";

import useSpeechRecognition from "../hooks/speech.recognition.js";
import askRexy from "../services/assistant.service.js";
import speak from "../services/text2speech.js";
import MicButton from "../components/MicButton.jsx";

function Home() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const askAssistant = async (text) => {
        if (!text?.trim()) return;

        try {
            setLoading(true);
            setResponse("");

            const result = await askRexy(text);

            setResponse(result);

            speak(result);
        } catch (error) {
            console.error(error);
            setResponse("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const handleSpeechResult = (text) => {
        setMessage(text);
        askAssistant(text);
    };

    const { listening, startListening } =
        useSpeechRecognition(handleSpeechResult);

    return (
        <div>
            <h1>Rexy</h1>

            <MicButton
                listening={listening}
                loading={loading}
                onClick={startListening}
            />

            <p>
                <strong>You:</strong> {message}
            </p>

            <p>
                <strong>Rexy:</strong> {loading ? "Thinking..." : response}
            </p>
        </div>
    );
}
export default Home;