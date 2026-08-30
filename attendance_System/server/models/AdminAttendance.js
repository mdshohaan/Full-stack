const { Schema, model } = require("mongoose");

const adminAttendanceSchema = new Schema(
  {
    timeLimit: { type: Number, required: true, max: 60, min: 5, default: 30 },
    status: {
      type: String,
      required: true,
      enum: ["RUNNING", "COMPLETED"],
      default: "COMPLETED",
    },
  },
  { timestamps: true },
);

const AdminAttendance = model("AdminAttendance", adminAttendanceSchema);

module.exports = AdminAttendance;
