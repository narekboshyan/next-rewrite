import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '.';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';

const handler = NextAuth({
  adapter: FirebaseAdapter(db),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || ' ',
          (credentials as any).password || ' ',
        ).then(userCredential => userCredential.user.toJSON());
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async redirect() {
      return 'http://admin.localhost:3000';
    },
  },

  pages: {
    signIn: '/login',
    // error: '/admin/login',
  },
  // trustHost: true,
  secret: process.env.NEXT_AUTH_SECRET,
});

export { handler as GET, handler as POST };
