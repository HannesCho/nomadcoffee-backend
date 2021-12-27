import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    name: String!
    password: String!
    bio: String
    avatar: String
    githubUsername: String
    following(lastId: Int): [User]
    followers(lastId: Int): [User]
    createdAt: String!
    updatedAt: String!
    shops: [CoffeeShop]
  }
`;
