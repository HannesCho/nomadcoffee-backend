import { gql } from "apollo-server-express";

export default gql`
  type coffeeShopPhoto {
    id: Int!
    user: User!
    userId: Int!
    file: String!
    caption: String
    createdAt: String!
    updatedAt: String!
  }
`;
