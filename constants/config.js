
const corsOptions = {
    origin: [
        "http://localhost:5174",
        "http://localhost:5173",
        "https://talksynccc.netlify.app/login",
        "https://talksynccc.netlify.app",
        "https://talksyncc.netlify.app/login",
        "https://talksyncc.netlify.app"
    ].filter(Boolean), // Removes undefined values
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers to allow
};

// const MESSAGE_TOKRN = "message-Token";
const MESSAGE_TOKEN = "message-Token";


export { corsOptions, MESSAGE_TOKEN };