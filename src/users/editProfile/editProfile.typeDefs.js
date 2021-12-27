import { gql } from "apollo-server";

export default gql`
  scalar Upload
  type EditProfileResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editProfile(
      username: String
      email: String
      name: String
      password: String
      bio: String
      avatar: Upload
      githubUsername: String
    ): EditProfileResult!
  }
`;
