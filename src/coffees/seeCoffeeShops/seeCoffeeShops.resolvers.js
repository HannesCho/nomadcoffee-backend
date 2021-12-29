import client from "../../client";

export default {
  Query: {
    seeCoffeeShops: (_, { lastId }) => client.coffeeShop.findMany(),
  },
};
