require("dotenv").config();
import {ApolloServer} from "apollo-server-express"
import express from "express"
import { graphqlUploadExpress } from "graphql-upload";
import logger from "morgan";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context: async ({ req }) => {
      return {
        loggedInUser: await getUser(req.headers.token),
      };
    },
  });

  await server.start();

  const app = express();

  // This middleware should be added before calling `applyMiddleware`.
  app.use(logger("tiny"));
  server.applyMiddleware({ app });
  app.use(graphqlUploadExpress());
  app.use("/static", express.static("uploads"));


  await new Promise(r => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startServer();