import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { loginUser, registerUser } from "./modules/authentication/api/auth.api";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub,
        Google,
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
                        email: credentials.email as string,
                        password: credentials.password as string,
                        username: credentials.username as string,
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
                    console.error(error);
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
                        email: credentials.email as string,
                        password: credentials.password as string,
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
                    console.error(error);
                    throw new Error("Invalid credentials");
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            // Initial sign in
            if (account && user) {
                // If using credentials provider
                if (account.provider === "credentials") {
                    token.accessToken = (user as any).token;
                    token.id = user.id;
                }
                // If using OAuth provider, send user data to your backend
                else if (account.provider) {
                    try {
                        const response = await fetch("http://localhost:8000/v1/auth/social-login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email: user.email,
                                username: user.name,
                                image_url: user.image,
                                provider: account.provider,
                                provider_id: account.providerAccountId,
                            }),
                        });

                        const data = await response.json();

                        if (!response.ok) {
                            throw new Error(data.message || "Social login failed");
                        }

                        token.accessToken = data.acess_token;
                        // TODO: added the user id
                        // token.id = data.user.id;
                        token.id = data.access_token;
                    } catch (error) {
                        console.error("Social login error:", error);
                    }
                }
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.accessToken = token.accessToken as string;
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
});
