const { AuthenticationError } = require("apollo-server-express");

const { Book } = require("../models");

const removeBook = async (_, { input, context }) => {
  if (context.user) {
    if (user === context.user.id) {
      const book = await Book.delete({});

      return book;
    } else {
      throw new AuthenticationError(
        "User not authorised to perform this action."
      );
    }
  }
};

module.export = removeBook;
