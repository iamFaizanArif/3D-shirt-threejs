import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();
const app = express();
// as a middleware wihtout this we can face cross origin problem
app.use(cors());
// wait of payload that we will send
app.use(express.json({limit: "50mb"}));

// NOw we will use imported route as a middleware
app.use("/api/v1/dalle", dalleRoutes);

// Demo Route
app.get("/", (req, res) => {
    res.status(200).json({message: "Hey From DALL.E"})
})

// Our Backend is running but not hosting at any where so we will assign port to it.
app.listen(8080, () => console.log("Server has started on 8080 port."))