import Google from '@auth/core/providers/google'
import GitHub from '@auth/core/providers/github'
import { SvelteKitAuth } from '@auth/sveltekit'

export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Google({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET }),
    GitHub({ clientId: process.env.GITHUB_CLIENT_ID, clientSecret: process.env.GITHUB_CLIENT_SECRET })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = profile.id
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.user.id = token.id
      return session
    }
  }
})