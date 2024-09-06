'use client';

import { Box, rem, Text, Title } from '@mantine/core';

interface HeadProps {
  title: string;
  description?: string;
}

export const Head = ({ title, description }: HeadProps) => (
  <Box>
    <Title fw={600} fz={rem('20px')} lh={rem('28px')} c="gray-scale.10">
      {title}
    </Title>
    {description ? (
      <Text fw={400} fz={rem('15px')} lh={rem('24px')} c="gray-scale.5" mt="sm">
        {description}
      </Text>
    ) : null}
  </Box>
);
