# mern-book-search-engine

## Links

- [Heroku Deployment](https://v-mern-book-search-engine.herokuapp.com/)
- [Github Repository](https://github.com/vilmaq/mern-book-search-engine)

## Description

The aim of this project is to refactor a fully functioning Google Books API search engine built with a RESTful API, to be a GraphQL API built with Apollo Server.

The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API.

To complete the assignment, the following steps have been followed:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

## Getting started

- Inside Server Folder run the command:

1. To install the dependencies
   `install npm i`
2. To Start the server:
   `npm run start`

- Inside Client Folder run the command:

1. To install the dependencies
   `install npm i`
1. To Start the react application:
   `npm run start`

## Printscreens

## Mutations Client side

```import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation($addUserInput: AddUserInput!) {
    addUser(input: $addUserInput) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;

export const SAVEBOOK = gql`
  mutation Mutation($saveBookInput: SaveBookInput!) {
    saveBook(input: $saveBookInput) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVEBOOK = gql`
  mutation Mutation($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
```
