import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            authorize(credentials, req) {
                
            }
        })
    ],
    pages: {
        signIn: '/auth/login'
    }
}

export default NextAuth(authOptions)