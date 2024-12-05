import { gql } from "@apollo/client";

const CREATE_USER = `
mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    clerkId
    email 
    firstName
    lastName
    imageUrl
  }
}`

export default CREATE_USER;
