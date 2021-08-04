const { AuthenticationError } = require("apollo-server");
const { Book } = require("../models");

const saveBook = async (_, { input }, context) => {
  if (context.user) {
    const { description, title, bookId, image, link } = input;

    if (user === context.user.id) {
      const newBook = {
        id: uuidv4(),
        description,
        title,
        image,
        link,
      };

      await Book.findByIdAndUpdate(bookId, {});
      return newBook;
    } else {
      throw new AuthenticationError("User not authorised");
    }
  } else {
    throw new AuthenticationError("User not authorised");
  }
};

module.export = saveBook;
