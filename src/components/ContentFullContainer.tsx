import { FC, HTMLAttributes, ReactNode } from 'react';

export const ContentFullContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => (
  <div className="content_full">
    <div className={[className, 'content'].join(' ')} {...rest} />
  </div>
);
