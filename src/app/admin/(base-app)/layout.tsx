'use client';
import { ContentFullContainer } from '@/components/ContentFullContainer';
import styles from './admin.module.scss';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Button from '@/components/Button/Button';
import { useCallback, useMemo } from 'react';
import { signOut as nextSignOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';

const navItems = [
  { href: '/blog', title: 'Blog' },
  { href: '/our-works', title: ' Our Works' },
  { href: '/careers', title: 'Careers' },
];

const pagesWithNavigation = ['/blog'];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const session = useSession({ required: true, onUnauthenticated: () => redirect('/login') });
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    try {
      await signOut(auth);
      await nextSignOut({ redirect: false });
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const Navigation = useMemo(() => {
    return (
      <nav>
        <div className={styles.left}>
          {navItems.map(item => (
            <Link
              key={item.href}
              className={[
                styles.nav_item,
                pathname.includes(item.href) && styles.nav_item_active,
              ].join(' ')}
              href={item.href}>
              {item.title}
            </Link>
          ))}
        </div>

        <Button onClick={handleLogout}>Sign out</Button>
      </nav>
    );
  }, [handleLogout, pathname]);

  return (
    <div className={styles.page}>
      <ContentFullContainer>
        {pagesWithNavigation.includes(pathname) && Navigation}
        {children}
      </ContentFullContainer>
    </div>
  );
}
