import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session management
    maxAge: 15 * 24 * 60 * 60, // 15 days (in seconds)
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      // Log data from Google here
      if (account && profile) {
        console.log("Account Data:", account); // Logs account info like access_token, provider, etc.
        console.log("Google Profile Data:", profile); // Logs profile info returned by Google (e.g. email, name, etc.)
      }
      return token;
    },
    async session({ session, token }) {
      // Optionally, you can log the session data here if needed
      console.log("Session Data:", session);
      console.log("JWT Token:", token);
      return session;
    },
  },
});
