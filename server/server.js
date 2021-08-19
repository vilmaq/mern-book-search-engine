const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const db = require("./config/connection");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const context = require("./context");

const app = express();

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
