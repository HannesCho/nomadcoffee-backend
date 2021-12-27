import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadUserPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {}
    ),
  },
};
