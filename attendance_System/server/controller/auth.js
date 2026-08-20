const { loginService, registerService } = require("../service/auth");

const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // validation check
    if (!name || !email || !password) {
      return res.status(400).json("Invalid data");
    }
    const user = await registerService({ name, email, password });
    return res.status(201).json({ message: "User Created successfully", user });
  } catch (e) {
    next(e);
  }
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const token = await loginService({ email, password });
    return res.status(201).json({ message: "Login successful", token });
  } catch (e) {
    next(e);
  }
};

module.exports = { registerController, loginController };
