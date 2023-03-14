const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    user(username: String!): User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser(userId: ID!): User
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String

  }

  type Auth {
    token: ID!
    user: User
  }

`;

// userFriends: [User]

module.exports = typeDefs;
