import CredentialsProvider from "next-auth/providers/credentials";
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
          // console.log({ credentials });
          // console.log("this is user=", user);
          return user;
        } catch (error) {
          throw new Error("Failed to login");
        }
        // const user = await User.findOne({ email: credentials?.email });
        // if (!user) {
        //   throw new Error("No such user found!");
        // }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
      }
      console.log("token=", token);
      return token;
    },
    async session(session, token) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.username = token.username;
      } else {
        console.log("token проєбали");
      }
      console.log("session=", session);
      return session;
    },
  },
};
