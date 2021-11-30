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
};