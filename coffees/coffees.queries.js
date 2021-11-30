import client from "../client";
export default {
  Query: {
    coffees: () => client.coffee.findMany(),
    coffee: (_, { id }) => client.coffee.findUnique({ where: { id } }),
  },
};