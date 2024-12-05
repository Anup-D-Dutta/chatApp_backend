// const corsOptions ={
//     origin: [
//         "http://localhost:5173",
//         "http://localhost:4173", 
//         process.env.CLIENT_URL
//     ],
//     methods: ['GET','POST','PUT','DELETE'],
//     credentials: true, // Allow cookies
// }

// const MESSAGE_TOKRN = "message-Token"

// export{corsOptions, MESSAGE_TOKRN}


const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            "http://localhost:5173",
            "http://localhost:4173",
            process.env.CLIENT_URL
        ];
        if (allowedOrigins.includes(origin) || !origin) {
            // Allow the request if origin matches or it's a non-browser request (no origin)
            callback(null, true);
        } else {
            // Block the request
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies
};
const MESSAGE_TOKRN = "message-Token"

export{corsOptions, MESSAGE_TOKRN}
