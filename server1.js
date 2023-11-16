import express from "express"
import { router } from "./controller/empcontroller.js"
import { connectDB } from "./repository/employeeRep.js"
import "dotenv/config"
import cors from "cors"
const app=express()
app.use(cors())
connectDB()
app.use(express.json())
app.use("/api/v1/employee",router)
app.listen(5000)