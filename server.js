const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/appointments", require("./routes/appointmentRoutes"));

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(` Appointment Service running on port ${PORT}`));
