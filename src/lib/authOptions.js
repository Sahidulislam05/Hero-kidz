import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const user = await loginUser({
            email: credentials.email,
            password: credentials.password,
          });

          // Return user object if authentication succeeds
          if (user) {
            return {
              id: user._id?.toString() || user._id,
              email: user.email,
              name: user.name,
              role: user.role || "user",
            };
          }
          
          return null;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      try {
        // For credentials provider, trust the authorize function
        if (account?.provider === "credentials") {
          return !!user;
        }

        // For OAuth providers
        if (!user?.email) {
          return false;
        }

        const usersCollection = await dbConnect(collections.USERS);
        const isExist = await usersCollection.findOne({
          email: user.email,
        });

        if (isExist) {
          return true;
        }

        // Create new OAuth user
        if (account?.provider === "google") {
          const newUser = {
            provider: account.provider,
            email: user.email,
            name: user.name,
            image: user.image,
            role: "user",
            createdAt: new Date(),
          };
          
          const result = await usersCollection.insertOne(newUser);
          return result.acknowledged;
        }

        return true;
      } catch (error) {
        console.error("SignIn callback error:", error);
        return false;
      }
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role || "user";
        session.user._id = token._id;
      }
      return session;
    },

    async jwt({ token, user, account }) {
      // On initial sign in
      if (user) {
        token._id = user.id || user._id;
        token.role = user.role || "user";
        token.email = user.email;
      }

      // For Google OAuth
      if (account?.provider === "google" && user?.email) {
        try {
          const usersCollection = await dbConnect(collections.USERS);
          const dbUser = await usersCollection.findOne({
            email: user.email,
          });

          if (dbUser) {
            token._id = dbUser._id?.toString();
            token.role = dbUser.role || "user";
            token.email = dbUser.email;
          }
        } catch (error) {
          console.error("JWT callback error:", error);
        }
      }

      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
