const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  queueNumber: Number,
  patient: String,
  doctor: String,
  department: String,
  date: Date,
  reason: String,
  status: String,
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
