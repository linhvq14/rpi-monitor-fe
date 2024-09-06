'use client';

import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  Title,
  Group,
  Stack,
  rem,
  Grid,
} from '@mantine/core';

export const NotFound = ({ withLogo }: { withLogo?: boolean }) => (
  <>
    <Box
      pos="absolute"
      style={{
        top: rem('44px'),
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      hidden={!withLogo}
    >
      <Image src="/logo.svg" w={140} />
    </Box>

    <Flex align="center" justify="center" h="100vh" p={{ base: rem('24px'), md: rem('36px') }}>
      <Group gap={rem('32px')} align="center" justify="center">
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }} order={{ base: 2, md: 1, lg: 1 }}>
            <Stack gap={rem('16px')}>
              <Title order={2} c="gray-scale.10" fz={rem('44px')} fw={600} lh={rem('52px')}>
                Rè rè!!
              </Title>
              <Title order={3} c="gray-scale.10" fz={rem('28px')} fw={600} lh={rem('34px')}>
                Trang bạn tìm không tồn tại...
              </Title>
            </Stack>

            <Stack gap={rem('12px')} mt={rem('32px')}>
              <Text c="gray-scale.10" fz={rem('15px')} fw={600} lh={rem('24px')}>
                Điều này có thể do:
              </Text>
              <List>
                <ListItem c="gray-scale.10" fz={rem('15px')} fw={400} lh={rem('24px')}>
                  Nhập sai địa chỉ trang.
                </ListItem>
                <ListItem c="gray-scale.10" fz={rem('15px')} fw={400} lh={rem('24px')}>
                  Đường dẫn bị lỗi hoặc hết hạn.
                </ListItem>
              </List>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 6 }} order={{ base: 1, md: 2, lg: 2 }}>
            <Image src="/background/404.png" />
          </Grid.Col>
        </Grid>
      </Group>
    </Flex>
  </>
);
