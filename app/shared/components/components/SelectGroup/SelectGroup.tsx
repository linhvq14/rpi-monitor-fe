import { ReactNode } from 'react';
import styles from './SelectGroup.module.css';

interface SelectGroupProps {
  children: ReactNode;
}

export const SelectGroup = ({ children }: SelectGroupProps) => (
  <div className={styles.selectGroupRoot}>{children}</div>
);
