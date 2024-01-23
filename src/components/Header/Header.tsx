'use client';

import { memo, useCallback, useState } from 'react';
import styles from './Header.module.scss';
import BeeWebLogo from '/public/beeweb.svg';
import Link from 'next/link';
import { useWindowSize } from '@/hooks/useWindowSize';
import { HeaderNavLinks } from '@/assets/constants/navLinks';
import { usePathname } from 'next/navigation';

const Header = () => {
  const { width } = useWindowSize();
  const pathname = usePathname();

  const [opened, setOpened] = useState(false);
  const handleOpen = () => {
    setOpened(prev => !prev);
  };

  const handleMobileNavLink = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <nav className={[styles.header, opened && styles.header_opened].join(' ')}>
      {width <= 992 ? (
        <>
          <div className={styles.mobile_content}>
            <Link href="/">
              <BeeWebLogo />
            </Link>
            <div
              className={[styles.hamburger, opened && styles.hamburger_opened].join(' ')}
              onClick={handleOpen}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={styles.mobile_navigation}>
            {HeaderNavLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={handleMobileNavLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.content}>
          <Link href="/">
            <BeeWebLogo />
          </Link>
          <div className={styles.navigation}>
            {HeaderNavLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  link.class && styles[link.class],
                  pathname.includes(link.href) && styles.active,
                ].join(' ')}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Header);
