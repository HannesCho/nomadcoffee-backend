require("dotenv").config();
import {ApolloServer} from "apollo-server-express"
import express from "express"
import logger from "morgan";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
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
console.log(server.graphqlPath)
const PORT = process.env.PORT || 4000;
  await new Promise(r => app.listen({ port: PORT }, r));

  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer();