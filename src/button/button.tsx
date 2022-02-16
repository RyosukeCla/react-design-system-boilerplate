import { HTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import * as styles from './button.css';

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return <button {...props} className={classNames(styles.Button, props.className)} ref={ref}>{children}</button>
});

