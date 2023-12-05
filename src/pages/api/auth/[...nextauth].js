import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '177416629956-13h2ho8hp8i0ioa4nj3eqaumgivkn2r9.apps.googleusercontent.com',
      clientSecret: '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'
    })
    // ...add more providers here
  ]
}
export default NextAuth(authOptions)
