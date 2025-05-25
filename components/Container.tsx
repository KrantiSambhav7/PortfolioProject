import React from 'react';
import clsx from 'clsx'; // or use `classnames`

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx('max-w-4xl w-full mx-auto bg-white dark:bg-black', className)}>
      {children}
    </div>
  );
};

export default Container;

