'use client';
import { Ubuntu } from 'next/font/google';
import '@/assets/styles/globals.scss';
import { SessionProvider } from 'next-auth/react';
import { onAuthStateChanged } from 'firebase/auth';
import { useCallback, useEffect } from 'react';
// import { auth } from '@/firebase';

const ubuntuFont = Ubuntu({
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const handleAuthStateChanged = useCallback((user: any) => {
    console.log({ user });
    // setUser(user);
    // if (initializing) setInitializing(false);
  }, []);

  useEffect(() => {
    // const subscriber = onAuthStateChanged(auth, handleAuthStateChanged);

    // return subscriber;
  }, [handleAuthStateChanged]);
  return (
    <html lang="en">
      <body className={ubuntuFont.className}>
        <SessionProvider>
          <div className="root_admin">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
