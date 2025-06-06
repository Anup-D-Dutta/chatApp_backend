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



import cors from "cors";

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    'https://chat-app-frontend-nqbig3g45-anup-duttas-projects.vercel.app/login',
];

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

// app.use(cors(corsOptions));


const MESSAGE_TOKRN = "message-Token"

export{corsOptions, MESSAGE_TOKRN}