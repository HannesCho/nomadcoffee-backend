import { gql } from "apollo-server";

export default gql`
  scalar Upload
  type EditCoffeeShopResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    editCoffeeShop(
      id: Int!
      name: String
      latitude: String
      longitude: String
      files: Upload
      category: String
    ): EditCoffeeShopResult!
  }
`;
