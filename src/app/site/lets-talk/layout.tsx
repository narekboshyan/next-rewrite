import Button from '@/components/Button/Button';
import styles from './LetsTalk.module.scss';
import Input from '@/components/Input/Input';
import { ContentFullContainer } from '@/components/ContentFullContainer';

const LetsTalkLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layout}>{children}</div>
      <div className={styles.footer}>
        <ContentFullContainer className={styles.container}>
          <form>
            <div className={styles.left}>
              <Input wrapperClassName={styles.input_wrapper} placeholder="Full name *" />
              <Input wrapperClassName={styles.input_wrapper} placeholder="Country" />
              <Input wrapperClassName={styles.input_wrapper} placeholder="E-mail*" />
            </div>
            <div className={styles.right}>
              <Input wrapperClassName={styles.input_wrapper} placeholder="Phone" />
              <textarea placeholder="Describe your project*" />
            </div>
          </form>
          <Button>Talk to BeeTeam</Button>
        </ContentFullContainer>
      </div>
    </>
  );
};

export default LetsTalkLayout;
