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

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
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

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    me: User!
  }
  type Mutation {
    login(Input: LoginInput): Auth!
    addUser(Input: AddUserInput): Auth!
    saveBook(input: SaveBookInput): User!
    removeBook(bookId: String!): User!
  }
`;
module.exports = typeDefs;
