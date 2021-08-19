const { AuthenticationError } = require("apollo-server-express");

const { User } = require("../models");

const removeBook = async (_, { input }, context) => {
  const { bookId } = input;
  if (context.user) {
    if (user === context.user._id) {
      const updatedUser = await User.findByIdAndUpdate(
        {
          _id: context.user._id,
        },
        {
          $pull: { savedBooks: { bookId } },
        },
        {
          new: true,
        }
      );

      return updatedUser;
    } else {
      throw new AuthenticationError(
        "User not authorised to perform this action."
      );
    }
  }
};

module.exports = removeBook;
