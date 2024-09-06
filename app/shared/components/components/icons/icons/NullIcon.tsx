'use client';

import { rem } from '@mantine/core';

interface NullIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const NullIcon = ({ size, style, ...others }: NullIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: rem(size),
      height: rem(size),
      ...style,
    }}
    {...others}
  />
);
