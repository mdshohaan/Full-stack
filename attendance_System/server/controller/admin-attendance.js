const getEnable = async (req, res) => {
  try {
    res.status(200).json({ message: "Enable Attendance" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getDisable = async (req, res) => {
  try {
    res.status(200).json({ message: "Disable Attendance" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getEnable, getDisable };
