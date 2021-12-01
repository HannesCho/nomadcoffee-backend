import { gql } from "apollo-server";

export default gql`
type User{
    id: String!
    username: String!
    email: String!
    name: String!   
    location: String
    avatarURL: String
    githubUsername: String
    createdAt: String!
    updatedAt: String!
}
type ReturnObj {
    ok: Boolean!
    error: String
}
type Mutation {
    createAccount (
    username: String!
    email: String!
    name: String!
    password: String!
    ): ReturnObj
}
type Query {
    seeProfile(username: String): User
}`