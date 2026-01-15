'use client';
import classNames from 'classnames';
import React from 'react';

interface Props extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'data-testid'
> {
  labelType?: 'none' | 'basic';
  dataTestId?: string;
}

export const Input = ({
  className,
  labelType = 'none',
  dataTestId,
  ...props
}: Props) => {
  return (
    <input
      className={classNames('inf-lib-test-input', className, {
        basic: labelType === 'basic',
      })}
      data-testid={dataTestId}
      {...props}
    />
  );
};
