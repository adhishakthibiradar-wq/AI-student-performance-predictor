require("dotenv").config();
const express = require("express");
const cors = require("cors");


const connectDB = require("./config/db");
const predictionRoutes = require("./routes/predictionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", predictionRoutes);

app.get("/", (req, res) => {
    res.send("Backend Running 🚀");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});