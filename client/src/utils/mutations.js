import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email ) {
        token
        user {
            _id
            username
            email
          
        }
    }
}
`;

export const SAVE_BOOK = gql`
  mutation saveBook($id: ID!) {
    saveBook(book: $id) {
      _id
      username
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(book: $id) {
      _id
      username
      }
    }
  }
`;