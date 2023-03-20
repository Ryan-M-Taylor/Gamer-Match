import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
export const UPDATE_PREFERENCES = gql`
  mutation updatePreferences($favoriteConsole: [String], $coOp: Boolean, $competitive: Boolean, $genres: [String]) {
    updatePreferences(favoriteConsole: $favoriteConsole, coOp: $coOp, competitive: $competitive, genres: $genres) {
      favoriteConsole
      coOp
      competitive
      genres
      username
      _id
    }
  }
`;
export const ADD_POST = gql`
  mutation addPost($postText: String!, $postChannel: String!) {
    addPost(postText: $postText, postChannel: $postChannel) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
  `;

export const ADD_FRIEND = gql`
  mutation addFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      username
    }
  }
  `;
