import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      firstName
      lastName
      photo
    }
  }
`;

export default CREATE_USER;