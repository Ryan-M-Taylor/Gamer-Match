import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
      userFriends {
        _id
        username
      }
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
      postChannel
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
      posts {
      _id
      postText
      postChannel
      postAuthor
      createdAt
    }
      favoriteConsole
      competitive
      coOp
      genres
    }
  }

`;

//   export const QUERY_FRIENDS = gql`
//   query friends{
//     user(username: $username) {
//     userFriends {
//         _id
//         username
//       }
//   } 
//   }
// `;