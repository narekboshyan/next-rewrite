import Button from '@/components/Button/Button';
import styles from './Careers.module.scss';
import Input from '@/components/Input/Input';
import Upload from '@/assets/icons/upload.svg';
import { ContentFullContainer } from '@/components/ContentFullContainer';

const CareersLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layout}>{children}</div>
      <div className={styles.footer}>
        <ContentFullContainer className={styles.container}>
          <p>Apply</p>
          <form>
            <div className={styles.left}>
              <Input wrapperClassName={styles.input_wrapper} placeholder="Full name *" />
              <Input wrapperClassName={styles.input_wrapper} placeholder="Email address *" />
              <Input wrapperClassName={styles.input_wrapper} placeholder="Email address *" />
            </div>
            <div className={styles.right}>
              <textarea placeholder="Cover letter*" />
              <label htmlFor="attachFile">
                Upload your CV* <Upload />
              </label>
              <input className={styles.attachFile} id="attachFile" type="file" />
            </div>
          </form>
          <Button>Send</Button>
        </ContentFullContainer>
      </div>
    </>
  );
};

export default CareersLayout;
