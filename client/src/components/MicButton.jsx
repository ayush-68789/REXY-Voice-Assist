function MicButton({ listening, loading, onClick }) {
    return (
        <button onClick={onClick} disabled={listening || loading}>
            {listening ? "🎤 Listening..." : "🎤 Talk to Rexy"}
        </button>
    );
}

export default MicButton;
