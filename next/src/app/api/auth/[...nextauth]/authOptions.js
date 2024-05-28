import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../../../libs/db";
import User from "../../../../../models/UserModel";
import bcrypt from "bcrypt";

async function login(credentials) {
  try {
    await db.connect();
    const user = await User.findOne({ email: credentials.email });
    if (!user) throw new Error("No user found with this email");
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrect) throw new Error("Password doesn't match");

    return {
      id: user._id.toString(),
      email: user.email,
      username: user.username,
    };
  } catch (error) {
    console.log("Error while logging in:", error);
    throw error;
  } finally {
    await db.disconnect();
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          if (user) {
            console.log("User in authorize:", user);
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log("Authorize error:", error);
          throw new Error("Failed to login");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
      }
      console.log("JWT token:", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.username = token.username;
      } else {
        console.log("Token missing in session callback");
      }
      console.log("Session:", session);
      return session;
    },
  },
};
