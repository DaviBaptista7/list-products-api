import express, { response } from "express"
import helmet from "helmet"
import cors from "cors"
import rateLimit from "express-rate-limit"

export const createApp = () => {
    const app = express ()

    app.use (express.json())
    app.use(helmet())
    app.use(cors({origin:"*"}))
    app.use(rateLimit({windowMS:60_000,max:100}))

    app.get("/health", (_,response)=> {
        
    })
}