import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadCoffeeShopPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {}
    ),
  },
};
