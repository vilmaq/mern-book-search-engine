const { AuthenticationError } = require("apollo-server-express");
const { Book } = require("../models");

const saveBook = async (_, { input }, context) => {
  try {
    if (context.user) {
      const { bookId, title, description, image, link } = input;
      const UpdateUser = await User.findOneAndUpdate(
        { _id: context.user.id },
        {
          $push: { savedBooks: { bookId, title, description, image, link } },
        },
        { new: true }
      );

      console.log(updatedUser);
      return updatedUser;
    } else {
      throw new AuthenticationError("User not authorised");
    }
  } catch (err) {
    console.log(err);
    throw new AuthenticationError("Something went wrong!");
  }
};

module.export = saveBook;
