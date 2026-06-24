const dotenv = require("dotenv");
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const app = express();
const resumeRoutes = require("./routes/resumeRoutes");

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/resume", resumeRoutes);

const PORT = 5005;
app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`);
});