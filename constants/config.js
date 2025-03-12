// const corsOptions ={
//     origin: [
//         "http://localhost:5174",
//         "http://localhost:5173",
//         process.env.CLIENT_URL,
//     ],
//     methods: ['GET','POST','PUT','DELETE'],
//     credentials: true, // Allow cookies
//     allowedHeaders: ['Content-Type', 'Authorization'], // Headers to allow
// }

// const MESSAGE_TOKRN = "message-Token"

// export{corsOptions, MESSAGE_TOKRN}

const allowedOrigins = [
    "http://localhost:5174",
    "http://localhost:5173",
];

if (process.env.CLIENT_URL) {
    allowedOrigins.push(process.env.CLIENT_URL);
} else {
    console.warn("🚨 CLIENT_URL is missing in environment variables!");
}

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
};

const MESSAGE_TOKRN = "message-Token"


export { corsOptions, MESSAGE_TOKRN };
