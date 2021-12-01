import bcrypt from "bcrypt";
import client from "../client";

export default {
    Mutation: {
        createAccount: async (_, {username, email, name, password}) => {
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            {username},
                            {email},
                        ],
                    },
                });
                const uglyPassword = await bcrypt.hash(password, 10);
                if(existingUser) {
                    return {
                        ok: false, 
                        error: "This username/email is already taken." }
                }
                const user = await client.user.create({
                    data: {
                        username,
                        email,
                        name,
                        password: uglyPassword,
                    },
                });
                //console.log(user);
                return {
                    ok: true }
                }
        },
    };
