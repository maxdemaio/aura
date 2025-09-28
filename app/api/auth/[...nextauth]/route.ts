import NextAuth, { type NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
  ],
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }