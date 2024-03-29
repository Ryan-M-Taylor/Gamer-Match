const { gql } = require("apollo-server-express");

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
    userFriends: [User]
    posts: [Post]
    favoriteConsole: [String]
    competitive: Boolean
    coOp: Boolean
    genres: [String]
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    postChannel: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    users: [User]
    posts(username: String): [Post]
    post(postId: ID!): Post
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    addPost(postText: String!, postChannel: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    addFriend(friendId: ID!): User
    deleteFriend(friendId: ID!): User
    updatePreferences(favoriteConsole: [String], coOp: Boolean, competitive: Boolean, genres: [String]): User
  }
`;

module.exports = typeDefs;
