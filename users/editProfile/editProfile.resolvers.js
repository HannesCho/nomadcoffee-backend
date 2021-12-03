import { createWriteStream } from "fs";
import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../users.utils";
import { GraphQLUpload } from "graphql-upload";

const resolverFn = async (
  _,
  { username, email, name, password: newPassword, location, avatarURL },
  { loggedInUser }
) => {
  let avatar = null;

  if (avatarURL) {
    const { filename, createReadStream } = await avatarURL;
    const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
    const readStream = createReadStream();
    const writeStream = createWriteStream(
      process.cwd() + "/uploads/" + newFilename
    );
    readStream.pipe(writeStream);
    avatar = `http://localhost:4000/static/${newFilename}`;
  }

  console.log(avatar);
  let uglyPassword = null;

  if (newPassword) {
    uglyPassword = await bcrypt.hash(newPassword, 10);
  }

  const updatedUser = await client.user.update({
    where: { id: loggedInUser.id },
    data: {
      username,
      email,
      name,
      ...(uglyPassword && { password: uglyPassword }),
      location,
      ...(avatar && { avatarURL: avatar }),
    },
  });

  if (updatedUser.id) {
    return {
      ok: true,
    };
  } else {
    return {
      ok: false,
      error: "Could not oupdate profile.",
    };
  }
};

export default {
  Upload: GraphQLUpload,
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};