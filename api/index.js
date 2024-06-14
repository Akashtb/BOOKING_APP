import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import cookieParser from "cookie-parser"
const app = express()

dotenv.config() 
app.use(cookieParser())
const connect = async()=>{
    try{ 
        await mongoose.connect(process.env.MONGO_DB)
        console.log('Connected to MONGO_DB ')
    }catch(err){
        console.log("MongoDB Connection Error.",err)
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("MONGO_DB IS DISCONNECTED");
}) 
app.use(express.json())
app.use('/api/auth',authRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/users', usersRoute)


app.use((err,req,res,next)=>{
    const errorStatus =err.status || 500;
    const errorMessage = err.message || "Something went Wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(8000,()=>{
    connect()
    console.log("Server is running at http://localhost:8000")
})
