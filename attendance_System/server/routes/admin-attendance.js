const { Router } = require("express");
const {
  getEnable,
  getDisable,
  getStatus,
} = require("../controller/admin-attendance");

const router = Router();

router.get("/enable", getEnable);
router.get("/disable", getDisable);
router.get("/status", getStatus);

module.exports = router;
