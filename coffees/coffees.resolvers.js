import client from "../client";
export default {
  Mutation: {
    createCoffee: (_, { title }) =>
      client.coffee.create({
        data: {
          title,
        },
      }),
    deleteCoffee: (_, { id }) => client.coffee.delete({ where: { id } }),
    updateCoffee: (_, { id, title }) =>
      client.coffee.update({ where: { id }, data: { title } }),
  },
  Query: {
    coffees: () => client.coffee.findMany(),
    coffee: (_, { id }) => client.coffee.findUnique({ where: { id } }),
  },
};
