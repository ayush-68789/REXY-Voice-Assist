import { useState } from "react";
const useSpeechRecognition = (onResult) => {
    const [listening, setListening] = useState(false);

    const startListening = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Speech recognition is not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();

        recognition.lang = "en-US";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            setListening(true);
        };

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;

            onResult(text);
        };

        recognition.onerror = (error) => {
            console.error("Speech recognition error:", error);
            setListening(false);
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognition.start();
    };

    return {
        listening,
        startListening,
    };
};

export default useSpeechRecognition;