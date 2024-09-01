import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  providers:[
    CredentialsProvider({
      name:"Credentials",
      credentials:{
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials:any){
        return {
          id:"1"
        }
      }
    })
  ],
  secret:process.env.NEXTAUTH_SECRET || "arsenal",
  callbacks:{
    
  }
})

export { handler as GET, handler as POST }