const { getEnable, getDisable } = require("../controller/admin-attendance");

const router = express.Router();

router.get("enable", getEnable);
router.get("disable", getDisable);

module.exports = router;
