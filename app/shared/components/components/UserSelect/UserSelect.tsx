import { useState } from 'react';
import { UnstyledButton, Menu, Group, Avatar, rem, Box, Text } from '@mantine/core';
import classes from './UserSelect.module.css';
import { ArrowDropdownIcon } from '../icons';

interface UserSelectProps {
  data: {
    name: string;
    role: string;
    avatar: string;
  }[];
}

export const UserSelect = ({ data }: UserSelectProps) => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data?.length ? data[0] : null);
  const items = data.map((item, index) => (
    <Menu.Item
      leftSection={<Avatar src="/avatar.png" size={rem('44px')} />}
      onClick={() => setSelected(item)}
      key={index}
    >
      {item.name}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            <Avatar src={selected?.avatar} size={rem('44px')} />
            <Box>
              <Text fw={600} fz={rem('15px')} lh={rem('24px')} c="gray-scale.10">
                {selected?.name}
              </Text>
              <Text fw={400} fz={rem('15px')} lh={rem('24px')} c="gray-scale.5">
                {selected?.role}
              </Text>
            </Box>
          </Group>
          <ArrowDropdownIcon />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};
