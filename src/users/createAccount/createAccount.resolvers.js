import client from "../../client";
import bcrypt from "bcrypt";
import { GraphQLUpload } from "graphql-upload";

export default {
  Upload: GraphQLUpload,
  Mutation: {
    createAccount: async (
      _,
      {
        username,
        email,
        name,
        password,
        bio = null,
        avatar = null,
        githubUsername = null,
      }
    ) => {
      try {
        console.log("creatAccount");
        // check if username or email is already on DB.
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });

        if (existingUser) {
          throw new Error("This username/email is already taken.");
        }
        // hash password
        const uglyPassword = await bcrypt.hash(password, 10);
        // save and return the user
        const user = await client.user.create({
          data: {
            username,
            email,
            name,
            password: uglyPassword,
            bio,
            avatar,
            githubUsername,
          },
        });
        if (user.id) {
          return {
            ok: true,
          };
        } else {
          throw new Error("Could not create an account.");
        }
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};
