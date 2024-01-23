'use client';

import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useFormState } from 'react-dom';
import { submitGetinTouchForm } from '../actions';

import styles from './GetInTouchForm.module.scss';

const GetInTouchForm = () => {
  const [state, formAction] = useFormState(submitGetinTouchForm, {
    success: false,
    message: '',
  });

  return (
    <div className={styles.form_section}>
      <h3 className={styles.form_section_title}>Get in touch</h3>
      <p className={styles.form_section_description}>
        Fill out the form to let us know how we can help!
      </p>
      <form action={formAction} className={styles.form_section_form}>
        <div className={styles.form_section_form_inputs}>
          <div className={styles.form_section_form_inputs_left}>
            <Input
              required
              name="name"
              wrapperClassName={styles.input_wrapper}
              placeholder="Full name *"
            />
            <Input
              required
              name="email"
              wrapperClassName={styles.input_wrapper}
              placeholder="Email address *"
            />
            <Input name="company" wrapperClassName={styles.input_wrapper} placeholder="Company" />
          </div>
          <div className={styles.form_section_form_inputs_right}>
            <textarea required name="message" placeholder="Message*" />
          </div>
        </div>

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default GetInTouchForm;
