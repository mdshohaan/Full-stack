const User = require("../models/User");

const findUsers = () => {
  return User.find();
};

const findUserByproperty = (key, value) => {
  if (key === "_id") {
    return User.findById(value);
  }
  return User.findOne({ [key]: value });
};

const createNewUser = ({ name, email, password, roles, accountStatus }) => {
  const user = new User({
    name,
    email,
    password,
    roles: roles ? roles : ["STUDENT"],
    accountStatus: accountStatus ? accountStatus : "PENDING",
  });
  return user.save();
};

const updateUser = (id, data) => {
  return User.findByIdAndUpdate(id, { ...data }, { new: true });
};

module.exports = { findUserByproperty, createNewUser, findUsers, updateUser };
