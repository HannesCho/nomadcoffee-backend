import { gql } from "apollo-server";

export default gql`
type User{
    id: Int!
    username: String!
    email: String!
    name: String!   
    bio: String
    avatarURL: String
    githubUsername: String
    createdAt: String!
    updatedAt: String!
}`;
