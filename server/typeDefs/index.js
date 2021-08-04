const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: ID!
    authors: [String!]
    description: String
    title: String!
    image: String
    link: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input AddUserInput {
    username: String!
    email: String!
    password: String!
  }

  input SaveBookInput {
    bookId: String!
    authors: [String!]
    title: String!
    description: String!
    image: String!
  }

  type Mutation {
    login(Input: LoginInput): Auth!
    addUser(Input: AddUserInput): Auth!
    saveBook(input: SaveBookInput): User!
    removeBook(bookId: String!): User!
  }
`;
module.exports = typeDefs;
