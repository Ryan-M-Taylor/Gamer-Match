import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      userFriends {
        _id
        username
      }
      posts
      favoriteConsole
      competitive
      coOp
      genres
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postText
      postChannel
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      userFriends {
        _id
        username
        email
      }
    }
  }

`;

  export const QUERY_FRIENDS = gql`
  query getFriends{
    user(username: $username) {
    friends {
        _id
        usernamQUER
        email
      }
  } 
  }
`;
