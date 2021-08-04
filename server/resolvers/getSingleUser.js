const { User } = require("../models");

const getSingleUser = async (_, { id }) => {
  const singleUser = await User.findById(id);
  return singleUser;
};

module.export = getSingleUser;
