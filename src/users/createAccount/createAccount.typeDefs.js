import { gql } from "apollo-server";

export default gql`
  scalar Upload
  type CreateAccountResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String!
      password: String!
      avatar: Upload
      githubUsername: String
    ): CreateAccountResult!
  }
`;
