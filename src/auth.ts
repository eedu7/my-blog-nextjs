import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { loginUser, registerUser } from "./modules/authentication/api/auth.api";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub,
        Credentials({
            id: "register",
            name: "register",
            credentials: {
                username: { label: "Username", type: "text", value: "" },
                email: { label: "Email", type: "email", value: "" },
                password: { label: "Password", type: "password", value: "" },
            },

            authorize: async (credentials) => {
                try {
                    const user = await registerUser({
                        email: credentials.email,
                        password: credentials.password,
                        username: credentials.username,
                    });

                    return user
                        ? {
                              id: user.user?.uuid,
                              name: user.user?.username,
                              email: user.user?.email,
                              token: user.token,
                          }
                        : null;
                } catch (error) {
                    throw new Error("Invalid credentials");
                }
            },
        }),
        Credentials({
            id: "login",
            name: "login",
            credentials: {
                email: { label: "Email", type: "email", value: "" },
                password: { label: "Password", type: "password", value: "" },
            },

            authorize: async (credentials) => {
                try {
                    const user = await loginUser({
                        email: credentials.email,
                        password: credentials.password,
                    });

                    return user
                        ? {
                              id: user.user?.uuid,
                              name: user.user?.username,
                              email: user.user?.email,
                              token: user.token,
                          }
                        : null;
                } catch (error) {
                    throw new Error("Invalid credentials");
                }
            },
        }),
    ],
});
