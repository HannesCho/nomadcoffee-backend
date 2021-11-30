import { gql } from "apollo-server";

export default gql`
  type Coffee {
    id: Int!
    title: String!
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    coffees: [Coffee]
    coffee(id: Int!): Coffee
  }
  type Mutation {
    createCoffee(title: String!): Coffee
    deleteCoffee(id: Int!): Coffee
    updateCoffee(id: Int!, title: String!): Coffee
  }
`;