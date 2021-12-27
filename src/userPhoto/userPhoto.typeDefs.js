import { gql } from "apollo-server-express";

export default gql`
  type UserPhoto {
    id: Int!
    user: User!
    file: String!
    caption: String
    createdAt: String!
    updatedAt: String!
  }
`;
