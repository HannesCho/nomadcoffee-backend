import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadUserPhoto(file: String!, caption: String): UserPhoto
  }
`;
