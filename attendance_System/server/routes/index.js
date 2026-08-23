const router = require("express").Router();
const authenticate = require("../middleware/authenticate");
const authRoutes = require("./auth");
const usersRoutes = require("./users");
const userController = require("../controller/users");

router.use("/api/v1/auth", authRoutes);

router.use("/api/v1/users", userController.postUser);

router.use("/api/v1/users", authenticate, usersRoutes);

module.exports = router;
