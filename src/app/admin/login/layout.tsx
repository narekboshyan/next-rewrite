import { ContentFullContainer } from '@/components/ContentFullContainer';
import styles from './login.module.scss';

const LoginLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layout}>
        <ContentFullContainer>{children}</ContentFullContainer>
      </div>
    </>
  );
};

export default LoginLayout;
