import { GraphQLUpload } from "graphql-upload";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { extractCategories, filesHandler } from "../coffees.utils";

export default {
  Upload: GraphQLUpload,
  Mutation: {
    createCoffeeShop: protectedResolver(
      async (_, { name, files, category }, { loggedInUser }) => {
        try {
          console.log("creatCoffeeShop");
          let categoryObjs = [];
          let files_url = [];

          if (category) {
            categoryObjs = extractCategories(category);
          }

          if (files) {
            files_url = await Promise.all(
              files.map((file) => filesHandler(file))
            );
          }

          const shop = await client.coffeeShop.create({
            data: {
              user: {
                connect: {
                  user_id: loggedInUser.id,
                },
              },
              name,
              ...(categoryObjs.length > 0 && {
                categories: {
                  connectOrCreate: categoryObjs,
                },
              }),
            },
          });

          if (!shop) {
            throw new Error("An error occurs on CoffeeShop create.");
          }

          // const photo = await Promise.all(
          //   files_url.map(async (file_url) => {
          //     await client.coffeeShopPhoto.create({
          //       data: {
          //         url: file_url,
          //         shop: {
          //           connect: {
          //             id: shop.id,
          //           },
          //         },
          //       },
          //     });
          //   })
          // );

          // if (!photo) {
          //   throw new Error("An error occurs on the CoffeeShopPhoto upload.");
          // }

          return {
            ok: true,
          };
        } catch (err) {
          return {
            ok: false,
            error: `${err}`,
          };
        }
      }
    ),
  },
};