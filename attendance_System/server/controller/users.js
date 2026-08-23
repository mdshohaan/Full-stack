const User = require("../models/User");
const userService = require("../service/user");
const authService = require("../service/auth");
const { error } = require("../utils/error");

const getUsers = async (req, res, next) => {
  // TODO: filter sort pagination select

  try {
    const users = await userService.findUsers();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

const getUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await userService.findUserByproperty("_id", userId);
    if (!user) {
      throw error("User Not Found", 404);
    }
    return res.status(200).json(user);
  } catch (e) {
    next();
  }
};

const postUser = async (req, res, next) => {
  const { name, email, password, roles, accountStatus } = req.body;
  try {
    const user = await authService.registerService({
      name,
      email,
      password,
      roles,
      accountStatus,
    });
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
};

const postUserById = (req, res, next) => {};

const patchUserById = (req, res, next) => {};

const deleteUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await userService.findUserByproperty("_id", userId);
    if (!user) {
      throw error("User not Found", 404);
    }

    await user.remove();
    return res.status(203);

    // TODO: call delete user service
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  postUserById,
  patchUserById,
  deleteUserById,
};
