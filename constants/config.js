const corsOptions ={
    origin: [
        "https://chat-app-front-end-kgrz.vercel.app",
        process.env.CLIENT_URL
    ],
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true, // Allow cookies
}

const MESSAGE_TOKRN = "message-Token"

export{corsOptions, MESSAGE_TOKRN}