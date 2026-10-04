const API_URL = "http://localhost:5050/api/assistant";

const askRexy = async (message) => {
    const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to communicate with Rexy");
    }

    const data = await response.json();

    return data.response;
};

export default askRexy;