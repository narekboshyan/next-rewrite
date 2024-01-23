import { ButtonHTMLAttributes, FC, HTMLProps, ReactNode, memo } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

const Button: FC<Props> = ({ icon, className, children, ...buttonProps }) => {
  return (
    <button className={[className, styles.button].join(' ')} {...buttonProps}>
      <>
        {children}
        {icon}
      </>
    </button>
  );
};

export default memo(Button);
