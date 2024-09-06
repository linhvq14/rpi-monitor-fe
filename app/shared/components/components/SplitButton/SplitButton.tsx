'use client';

import { ActionIcon, Box, Button, Menu, rem } from '@mantine/core';
import { ReactNode } from 'react';
import { ChevronDownIcon } from '../icons';
import styles from './SplitButton.module.css';

interface SplitButtonProps {
  leftSection: ReactNode;
  label: string;
  items: {
    leftSection?: ReactNode;
    label: string;
    onClick?: () => void;
    href?: string;
  }[];
  onClick?: () => void;
  href?: string;
}

export const SplitButton = ({ leftSection, label, items, onClick, href }: SplitButtonProps) => (
  <Box className={styles.root}>
    <Button
      leftSection={leftSection}
      className={styles.button}
      {...(href ? { component: 'a', href } : { onClick: () => onClick && onClick() })}
    >
      {label}
    </Button>

    <Menu transitionProps={{ transition: 'pop' }} position="bottom-end" withinPortal>
      <Menu.Target>
        <ActionIcon variant="filled" size={32} className={styles.menuControl} h={rem('44px')}>
          <ChevronDownIcon />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {items
          ? items.map((item, index) => (
              <Menu.Item
                key={index}
                leftSection={item.leftSection}
                color="gray-scale.10"
                fz={rem('15px')}
                fw={400}
                lh={rem('24px')}
                {...(item?.href
                  ? { component: 'a', href: item?.href }
                  : {
                      onClick: () => item.onClick && item.onClick(),
                    })}
              >
                {item.label}
              </Menu.Item>
            ))
          : null}
      </Menu.Dropdown>
    </Menu>
  </Box>
);
