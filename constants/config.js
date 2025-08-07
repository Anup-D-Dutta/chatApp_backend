
const corsOptions = {
    origin: [
        "http://localhost:5174",
        "http://localhost:5173",
        process.env.CLIENT_URL,
    ].filter(Boolean), // Removes undefined values
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers to allow
};

const MESSAGE_TOKRN = "message-Token";

export { corsOptions, MESSAGE_TOKRN };