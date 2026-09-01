const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByproperty, createNewUser } = require("./user");
const { error } = require("../utils/error");

const registerService = async ({
  name,
  email,
  password,
  roles,
  accountStatus,
}) => {
  let user = await findUserByproperty("email", email);
  if (user) throw error("User already exist", 400);

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return createNewUser({ name, email, password: hash, roles, accountStatus });
};

const loginService = async ({ email, password }) => {
  const user = await findUserByproperty("email", email);
  if (!user) throw error("Invalid user", 400);

  const ismatch = await bcrypt.compare(password, user.password);
  if (!ismatch) throw error("Invalid user", 400);

  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    roles: user.roles,
    accountStatus: user.accountStatus,
  };

  // JWT Token
  return jwt.sign(payload, "secret-key", { expiresIn: "12h" });
};

module.exports = { registerService, loginService };
