import { Divider, NavLink, rem } from '@mantine/core';
import Link from 'next/link';
import styles from './MainNavbar.module.css';
import { ArrowDropdownIcon } from '../../components/components/icons';

export interface MenuItem {
  icon?: React.FC<any>;
  label?: string;
  link?: string;
  children?: MenuItem[];
  type: 'item' | 'divider' | string;
}

interface MainNavbarProps {
  menu?: MenuItem[];
}

export const MainNavbar = ({ menu }: MainNavbarProps) => {
  const renderItem = (item: MenuItem, index: number, level: number) => {
    if (item.type === 'divider') {
      return (
        <Divider
          key={`${level}-${index}`}
          style={{
            borderTopWidth: rem(1),
            borderColor: 'var(--mantine-color-gray-scale-3)',
          }}
          my="xs"
        />
      );
    }

    const hasChildren = Array.isArray(item.children) && item.children.length;

    if (item.type === 'item' && hasChildren) {
      return (
        <NavLink
          key={`${level}-${index}`}
          label={item.label}
          leftSection={item.icon ? <item.icon size={24} /> : null}
          rightSection={<ArrowDropdownIcon size="1rem" />}
          className={styles.navLink}
          classNames={{
            children: styles.navLinkChild,
          }}
          styles={{
            label: {
              fontSize: rem('15px'),
            },
            children: {
              '--offset-left': rem(48 * level),
            },
          }}
        >
          {item.children?.map((i: MenuItem, ind: number) => renderItem(i, ind, level + 1))}
        </NavLink>
      );
    }

    return (
      <NavLink
        component={Link}
        key={`${level}-${index}`}
        leftSection={item.icon ? <item.icon size={24} /> : null}
        className={styles.navLink}
        href={item?.link || '/'}
        label={item?.label}
        styles={{
          label: {
            fontSize: rem('15px'),
          },
        }}
      />
    );
  };

  return menu ? menu?.map((item: MenuItem, index: number) => renderItem(item, index, 1)) : null;
};
