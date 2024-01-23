'use client';

import { FormEventHandler, useCallback, useEffect } from 'react';
import styles from './login.module.scss';
import LoginIcon from '@/assets/images/login.svg';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Logo from '/public/beeweb.svg';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/blog');
    }
  }, [router, session.status]);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async event => {
      event.preventDefault();
      const email = (event.currentTarget[0] as HTMLInputElement).value;
      const password = (event.currentTarget[1] as HTMLInputElement).value;
      await signIn('credentials', { email, password, redirect: false }).then(value => {
        if (value?.url) {
          router.push(`${value?.url}/blog`);
        }
      });
    },
    [router],
  );
  return (
    <div className={styles.page}>
      <Logo />
      <div className={styles.content}>
        <div className={styles.item}>
          <LoginIcon />
        </div>
        <div className={styles.item}>
          <form onSubmit={onSubmit}>
            <h1>Login</h1>
            <Input
              wrapperClassName={styles.input_wrapper}
              className={styles.input}
              placeholder="Email"
            />
            <Input
              wrapperClassName={styles.input_wrapper}
              className={styles.input}
              placeholder="Password"
              type="password"
            />
            <Button className={styles.submitButton} type="submit">
              SignUp
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
