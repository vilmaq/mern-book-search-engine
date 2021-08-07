const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const getSingleUser = async (_, {}, context) => {
  if (context.user) {
    //hide password from the returned query
    const singleUser = await User.findOne({ _id: context.user._id }).select(
      "-__v -password"
    );
    return singleUser;
  }
  throw new AuthenticationError("User not logged in");
};

module.export = getSingleUser;
