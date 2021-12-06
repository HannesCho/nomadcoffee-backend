import client from "../../client";

export default {
  User: {
    following: ({ username }, { lastId }) =>
      client.user.findUnique({ where: { username } }).following({
        take: 5,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
      }),
    followers: ({ username }, { lastId }) =>
      client.user.findUnique({ where: { username } }).followers({
        take: 5,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
      }),
  },
};