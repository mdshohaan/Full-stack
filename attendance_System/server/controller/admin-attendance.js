const adminAttendance = require("../models/AdminAttendance");
const { error } = require("../utils/error");
const { addMinutes, isAfter } = require("date-fns");

const getEnable = async (req, res, next) => {
  try {
    const runningAttendance = await adminAttendance.findOne({
      status: "RUNNING",
    });
    if (runningAttendance) {
      throw error(400, "Attendance is already running");
    }
    const attendance = new adminAttendance({});

    await attendance.save();
    return res
      .status(200)
      .json({ message: "Enable Attendance Successfully", attendance });
  } catch (error) {
    next(error);
  }
};

const getDisable = async (req, res, next) => {
  try {
    const attendance = await adminAttendance.findOne({ status: "RUNNING" });
    if (!attendance) {
      return res.status(404).json({ message: "Attendance not Running" });
    }
    attendance.status = "COMPLETED";

    await attendance.save();
    return res
      .status(200)
      .json({ message: "Disable Attendance Successfully", attendance });
  } catch (error) {
    next(error);
  }
};

const getStatus = async (req, res, next) => {
  try {
    const runningAttendance = await adminAttendance.findOne({
      status: "RUNNING",
    });
    if (!runningAttendance) {
      return res.status(404).json({ message: "No running attendance found" });
    }
    const started = addMinutes(
      new Date(runningAttendance.createdAt),
      runningAttendance.timeLimit,
    );

    if (isAfter(new Date(), started)) {
      runningAttendance.status = "COMPLETED";
      await runningAttendance.save();
    }

    return res.status(200).json({
      message: "Running Attendance Found",
      attendance: runningAttendance,
      started,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getEnable, getDisable, getStatus };
