import { gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      name
      description
      price
    }
  }
`;

export default CREATE_PRODUCT;
